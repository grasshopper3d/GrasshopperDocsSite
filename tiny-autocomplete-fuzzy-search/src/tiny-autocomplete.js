/**
 * Tiny Autocomplete
 * Small and fast autocomplete plugin for Zepto and jQuery.
 * Written by Johan Halse, https://twitter.com/hejsna, johan@varvet.se
 * Contributions by Juha Tauriainen, https://github.com/JuhQ and
 * Phoebe Bright, https://github.com/phoebebright
 * License: http://johanhalse.mit-license.org
 * @version 1.0.0
 * @return {object}         Self
 */

var factory = function($, window) {
  var TinyAutocomplete = function(el, options) {
    var that = this; // This is just to minify better
    that.field = $(el);
    that.el = null;
    that.json = null;
    that.items = [];
    that.selectedItem = null;
    that.list = $('<ul class="autocomplete-list" />');
    that.lastSearch = null;
    that.options = options;
  };

  TinyAutocomplete.prototype = {
    defaults: {
      minChars: 2,
      markAsBold: true,
      grouped: false,
      queryProperty: "q",
      queryParameters: {},
      method: "get",
      scrollOnFocus: "auto",
      maxItems: 100,
      maxItemsOnMobile: 3,
      mobileWidth: 700,
      keyboardDelay: 300,
      lastItemTemplate: null,
      closeOnSelect: true,
      groupContentName: ".autocomplete-items",
      groupTemplate:
        '<li class="autocomplete-group"><span class="autocomplete-group-header">{{title}}</span><ul class="autocomplete-items" /></li>',
      itemTemplate: '<li class="autocomplete-item">{{title}}</li>',
      showNoResults: false,
      noResultsTemplate:
        '<li class="autocomplete-item">No results for {{title}}</li>',
      wrapClasses: "autocomplete"
    },

    /**
     * Constructor
     * @return {null}
     */
    init: function() {
      this.defaults.templateMethod = this.template;
      this.settings = $.extend({}, this.defaults, this.options);
      this.setupSettings();
      this.setupMarkup();
      this.setupEvents();

      return this;
    },

    /**
     * Micro-templating utility
     * @param  {string} template Template string with mustache-style curly braces
     * @param  {object} vars     Contains values to interpolate with
     * @return {string}          Interpolated string
     */
    template: function(template, vars) {
      return template.replace(/{{\s*[\w]+\s*}}/g, function(v) {
        return vars[v.substr(2, v.length - 4)];
      });
    },

    /**
     * Debounce function from http://davidwalsh.name/javascript-debounce-function
     * @param  {function} func       function to execute
     * @param  {number}   wait       delay in milliseconds
     * @param  {boolean}  immediate  whether to fire on trailing or leading
     * @return {function}            debounced function
     */
    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },

    /**
     * Tweak settings a bit, since we don't have any private functions
     * defined at constructor time.
     * @return {null}
     */
    setupSettings: function() {
      if (this.settings.scrollOnFocus == "auto") {
        this.settings.scrollOnFocus = this.isTouchDevice();
      }

      // We might be on a mobile device and have little in the way of
      // vertical real estate to work with. Cap it! This check needs a
      // bit more intelligence to it.
      this.settings.maxItemsOnLarge = this.settings.maxItems;
      if (
        window.innerWidth < this.settings.mobileWidth &&
        this.settings.maxItemsOnMobile !== null
      ) {
        this.settings.maxItems = Math.min(
          this.settings.maxItems,
          this.settings.maxItemsOnMobile
        );
      }

      // Using local data or remote url?
      if (this.settings.data) {
        this.request = this.localRequest;
      } else {
        this.request = this.remoteRequest;
      }

      // Set the keyboard delay before search fires
      if (this.settings.keyboardDelay != null) {
        this.request = this.debounce(this.request, this.settings.keyboardDelay);
      }
    },

    /**
     * Register initial callbacks
     * @return {null}
     */
    setupEvents: function() {
      this.el.on("keyup", ".autocomplete-field", $.proxy(this.onKeyUp, this));
      this.el.on(
        "keydown",
        ".autocomplete-field",
        $.proxy(this.onKeyDown, this)
      );
      this.el.on(
        "mousedown",
        ".autocomplete-item",
        $.proxy(this.onClickItem, this)
      );

      this.el.on("blur", ".autocomplete-field", $.proxy(this.closeList, this));
      var self = this;
      // Update maxItems when window size change
      $(window).resize(
        this.debounce(function() {
          if (
            window.innerWidth < self.settings.mobileWidth &&
            self.settings.maxItemsOnMobile !== null
          ) {
            self.settings.maxItems = Math.min(
              self.settings.maxItems,
              self.settings.maxItemsOnMobile
            );
          } else {
            self.settings.maxItems = self.settings.maxItemsOnLarge;
          }
        }, 250)
      );

      // Scroll to field if we're on a small device, we need that
      // screen real estate!
      if (this.settings.scrollOnFocus) {
        this.field.on("focus", function() {
          var h = $(this).offset().top;
          setTimeout(function() {
            window.scrollTo(0, h);
          }, 0);
        });
      }
    },

    /**
     * Wrap field in required markup and set up this.el
     * @return {null}
     */
    setupMarkup: function() {
      this.field.addClass("autocomplete-field");
      this.field.attr("autocomplete", "off");
      this.field.wrap('<div class="' + this.settings.wrapClasses + '" />');
      this.el = this.field.parent();
    },

    /**
     * Fire request to specified url
     * @param  {string} val Value to search for
     * @return {null}
     */
    remoteRequest: function(val) {
      this.field.trigger("beforerequest", [this, val]);
      var data = {};
      $.extend(data, this.settings.queryParameters);
      data[this.settings.queryProperty] = val;
      $.ajax({
        method: this.settings.method,
        url: this.settings.url,
        dataType: "json",
        data: data,
        success: $.proxy(this.beforeReceiveData, this)
      });
    },

    /**
     * Match request in local data instead of remote url
     * @param  {string} val Value to search for
     * @return {null}
     */
    localRequest: function(val) {
      if (this.settings.grouped) {
        this.beforeReceiveData(this.matchLocalPatternGrouped(val));
      } else {
        this.beforeReceiveData(this.matchLocalPatternFlat(val));
      }
    },

    /**
     * Match the data in a flat array and return the objects where a
     * hit was found.
     * @param  {string} val Value to search for
     * @return {array}      Array of hits
     */
    matchLocalPatternFlat: function(val) {
      return this.matchArray(val, this.settings.data);
    },

    /**
     * Match the data in a grouped array and return the objects where a
     * hit was found, in the same manner
     * @param  {string} val Value to search for
     * @return {array}      Array of hits
     */
    matchLocalPatternGrouped: function(val) {
      var r = $.extend(true, [], this.settings.data);

      for (var i = 0; i < r.length; i++) {
        var a = this.matchArray(val, r[i].data);
        if (a.length == 0) {
          r.splice(i, 1);
          i--;
        } else {
          r[i].data = a;
        }
      }

      return r;
    },

    /**
     * Return an array of matched values from a source array
     * @param  {string} val String to search for
     * @param  {array} arr  Array to search in
     * @return {array}      Matched array
     */
    matchArray: function(val, arr) {
      var r = [];
      for (var i = 0; i < arr.length; i++) {
        for (var j in arr[i]) {
          if (
            (arr[i][j].toLowerCase &&
              arr[i][j].toLowerCase().indexOf(val.toLowerCase()) > -1) ||
            arr[i][j] == val
          ) {
            r.push(arr[i]);
            break;
          }
        }
      }

      return r;
    },

    /**
     * Find DOM object at specified index
     * @param  {number} i Index
     * @return {object}   DOM object
     */
    itemAt: function(i) {
      if (i == null) {
        return $();
      }

      return this.el.find(".autocomplete-item").eq(i);
    },

    /**
     * Find item number for clicked item
     * @param  {object} o The clicked object
     * @return {number}   Item's id in array
     */
    clickedItemAt: function(o) {
      for (var i = 0; i < this.items.length; i++) {
        if (
          o ==
          this.el
            .find(".autocomplete-item")
            .eq(i)
            .get(0)
        ) {
          return i;
        }
      }
      return null;
    },

    /**
     * Select previous item
     * @return {null}
     */
    prevItem: function() {
      this.selectedItem--;
      if (this.selectedItem < 0) {
        this.selectedItem = null;
      }

      this.markSelected(this.selectedItem);
    },

    /**
     * Select next item
     * @return {null}
     */
    nextItem: function() {
      if (this.selectedItem == null) {
        this.selectedItem = -1;
      }
      this.selectedItem++;

      var l = this.settings.lastItemTemplate
        ? this.items.length
        : this.items.length - 1;
      if (this.selectedItem >= l) {
        this.selectedItem = l;
      }

      this.markSelected(this.selectedItem);
    },

    /**
     * Mark an item as selected
     * @param  {number} i Item's id in items array
     * @return {null}
     */
    markSelected: function(i) {
      this.el.find(".active").removeClass("active");
      this.itemAt(i).addClass("active");
    },

    /**
     * Iterate through data, adding <strong> tags for every hit.
     * Splits strings into words using whitespace and matches each
     * word separately.
     * @param  {object} v   Data to operate on
     * @param  {string} str String to search for
     * @return {object}     Processed data object
     */
    markHitText: function(v, str) {
      var words = str.split(" ");
      for (var i in v) {
        if (typeof v[i] == "string" && i != "template") {
          var replacements = [str];
          for (var j = 0; j < words.length; j++) {
            var word = words[j].trim().replace(/[^a-ö0-9]/gi, ""); // Remove non-alphanumerics
            if (word.length > 0) {
              replacements.push(word);
            }
          }
          v[i] = v[i].replace(
            new RegExp("(" + replacements.join("|") + ")", "gi"),
            "<strong>$1</strong>"
          );
        }
      }
      return v;
    },

    /**
     * Render groups. This must be done before calling
     * renderItemsInGroups, since it resets the list markup and
     * attaches a new this.list object.
     * @return {null}
     */
    renderGroups: function() {
      this.list.remove();
      this.list = $('<ul class="autocomplete-list" />');
      for (var i in this.json) {
        this.list.append(
          this.settings.templateMethod(
            this.settings.groupTemplate,
            this.json[i]
          )
        );
      }

      this.el.append(this.list);
    },

    /**
     * Iterates through items and attaches them to their respective
     * groups.
     * @return {null}
     */
    renderItemsInGroups: function() {
      var v = this.field.val();
      for (var i = 0; i < this.json.length; i++) {
        var group = this.el.find(this.settings.groupContentName).eq(i);
        for (
          var j = 0;
          j < this.json[i].data.length && j < this.settings.maxItems;
          j++
        ) {
          var jsonData = $.extend({}, this.json[i].data[j]);
          // Strongify hits
          if (this.settings.markAsBold) {
            jsonData = this.markHitText(jsonData, v);
          }
          group.append(
            this.settings.templateMethod(
              this.json[i].template || this.settings.itemTemplate,
              jsonData
            )
          );
        }
      }
    },

    /**
     * If we're not dealing with groups, just attach items to the list.
     * @return {null}
     */
    renderItemsFlat: function() {
      this.list.remove();
      this.list = $('<ul class="autocomplete-list" />');
      var v = this.field.val();
      for (var i = 0; i < this.json.length && i < this.settings.maxItems; i++) {
        var jsonData = $.extend({}, this.json[i]);
        // Strongify hits
        if (this.settings.markAsBold) {
          jsonData = this.markHitText(jsonData, v);
        }
        this.list.append(
          this.settings.templateMethod(
            this.json[i].template || this.settings.itemTemplate,
            jsonData
          )
        );
      }
      this.el.append(this.list);
    },

    /**
     * If there's a last "find all results for..." item, this function
     * gets called.
     * @return {null}
     */
    renderLastItem: function() {
      this.list.append(
        this.settings.templateMethod(this.settings.lastItemTemplate, {
          title: this.field.val()
        })
      );
    },

    /**
     * If there's a "no results found for..." item, this function
     * gets called.
     * @return {null}
     */
    renderNoResults: function() {
      this.list.append(
        this.settings.templateMethod(this.settings.noResultsTemplate, {
          title: this.field.val()
        })
      );
    },

    /**
     * Removes list from DOM and resets state.
     * @return {null}
     */
    closeList: function() {
      $("html").off("click");
      this.list.remove();
      this.selectedItem = null;
    },

    /**
     * Since groups aren't selectable, we need to fetch the actual
     * selectable items and keep them around in our this.items list.
     * @return {array} List of selectable items
     */
    getItemsFromGroups: function() {
      var r = [];
      for (var i in this.json) {
        for (var j = 0; j < this.json[i].data.length; j++) {
          if (j < this.settings.maxItems) {
            r.push(this.json[i].data[j]);
          }
        }
      }

      return r;
    },

    /**
     * Check whether a value has changed. Used to determine whether or
     * not we fire a new request, since all keypresses generate an
     * event.
     * @return {boolean} True if value has changed since last request
     */
    valueHasChanged: function() {
      if (this.field.val() != this.lastSearch) {
        this.lastSearch = this.field.val();
        return true;
      }
      return false;
    },

    /**
     * A naive implementation of touch detection. In this day and age
     * with Microsoft Surfaces and whatnot, this should probably be
     * replaced with something more intelligent. But let's do that when
     * we find the time.
     * @return {boolean} Whether or not this is a touch device
     */
    isTouchDevice: function() {
      return !!("ontouchstart" in window);
    },

    /**
     * This is mostly an opportunity to hook into the data served by
     * server to do your own thing
     * @param  {object} data JSON from server
     * @param  {object} xhr  XHR object
     * @return {null}
     */
    beforeReceiveData: function(data, xhr) {
      this.json = data;
      this.field.trigger("receivedata", [this, data, xhr]);
      this.onReceiveData(this.json);
    },

    /**
     * Data received from server, determine what to do with it and
     * render everything.
     * @param  {object} data JSON from server
     * @return {null}
     */
    onReceiveData: function(data) {
      this.selectedItem = null;
      if (this.settings.grouped) {
        // First, render groups
        this.renderGroups();

        // Then, render the selectable items
        this.items = this.getItemsFromGroups();
        this.renderItemsInGroups();
      } else {
        this.items = this.json;
        this.renderItemsFlat();
      }

      // If no results, render no results message, if applicable
      if (!this.items.length) {
        if (this.settings.showNoResults) {
          this.renderNoResults();
        }
      }

      // Render last item, if applicable
      if (this.settings.lastItemTemplate) {
        this.renderLastItem();
      }

      // Click outside should close the list
      $("html").one("click", $.proxy(this.closeList, this));
    },

    /**
     * Keyup handler. If value has changed and contains min number of chars,
     * fire the (debounced) request.
     * @param  {object} e Normalized Event object
     * @return {null}
     */
    onKeyUp: function(e) {
      if (
        this.field.val().length >= this.settings.minChars &&
        this.valueHasChanged()
      ) {
        this.request(this.field.val());
      }
      if (this.field.val() == "") {
        this.lastSearch = "";
        this.closeList();
      }
    },

    /**
     * Keydown handler to take care of keyboard navigation.
     * @param  {object} e Normalized event object
     * @return {null}
     */
    onKeyDown: function(e) {
      if (e.keyCode == 38) {
        // Up
        e.preventDefault();
        this.prevItem();
      }
      if (e.keyCode == 40) {
        // Down
        e.preventDefault();
        this.nextItem();
      }
      if (e.keyCode == 13) {
        // Enter
        this.onPressEnter(e);
      }
      if (e.keyCode == 27) {
        // Esc
        e.preventDefault();
        this.closeList();
      }
    },

    /**
     * Click handler, handle mouse/touch selection of items.
     * @param  {object} e Normalized event object
     * @return {null}
     */
    onClickItem: function(e) {
      var i = this.clickedItemAt(e.currentTarget);
      this.onSelect(e.currentTarget, this.items[i]);
    },

    /**
     * User has pressed enter, select object or perform search.
     * @return {null}
     */
    onPressEnter: function(e) {
      // If field is filled in but no item is selected, we don't block
      // submit
      if (this.selectedItem === null) {
        return true;
      }

      e.preventDefault();
      this.onSelect(
        this.itemAt(this.selectedItem),
        this.items[this.selectedItem]
      );
    },

    /**
     * User has selected an object with mouse or keyboard - act on it
     * and fire any user-supplied callback.
     * @param  {object} item DOM object for the field
     * @param  {object} val  Item value from server
     * @return {null}
     */
    onSelect: function(item, val) {
      if (this.settings.onSelect) {
        this.settings.onSelect.apply(this.field, [item, val]);
      }
      this.lastSearch = this.field.val();
      if (this.settings.closeOnSelect) {
        this.closeList();
      }
    }
  };

  TinyAutocomplete.defaults = TinyAutocomplete.prototype.defaults;

  $.fn.tinyAutocomplete = function(settings) {
    return this.each(function() {
      if (this.tinyAutocomplete) {
        // Prevent TinyAutocomplete from creating a new object. Instead,
        // just update the settings object
        $.extend(this.tinyAutocomplete.settings, settings);
        return this;
      }

      var d = new TinyAutocomplete(this, settings).init();

      // Expose "tinyAutocomplete.settings" to the cold outside
      this.tinyAutocomplete = { settings: d.settings };
    });
  };
};

if (typeof exports !== "undefined") {
  module.exports = factory;
} else {
  factory($, window);
}
