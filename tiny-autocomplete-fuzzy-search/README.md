[![Build Status](https://travis-ci.org/varvet/tiny-autocomplete.svg?branch=master)](https://travis-ci.org/varvet/tiny-autocomplete)

# Tiny Autocomplete

A small and snappy (2k minified+gzipped!) JavaScript autocomplete plugin for Zepto and jQuery.

## Why?

Because the world needs a small and focused autocomplete plugin, not one that's dependent on jQuery UI or Bootstrap or Ember or Angular or whatever. Those have their place too but if you don't feel like pulling down some 200k of JavaScript and CSS just to get autocomplete functionality, this module is for you. The aim of Tiny Autocomplete is to make a plugin that's

- Small footprint
- Fast
- Compatible with both Zepto and jQuery (and hopefully most \$ libraries)
- Working on tablets and mobile devices

Tiny Autocomplete also tries hard to be extendable. There's no abuse of closures or effort to make things private within the plugin so if you want to monkey patch a built-in function, change a setting at runtime, or build a plugin for it - go right ahead!

## Data and templating

Tiny Autocomplete is a little picky with its JSON formatting. You can either just supply it with an array of objects (and those can contain arbitrary data), or you can feed it an array of groups. The grouped array items need a property called "data" that contains the array of objects instead. It's probably easiest to look at the local data examples if you need help - it's pretty straightforward. If you don't have control over your data, you might be able to hook into the `receivedata` event and rewire it a little - check the bottom of this documentation for an example of that.

Tiny Autocomplete also doesn't really assume it knows what your markup wants to look like. There's a built-in default but there's also a micro-templating engine in there which sounds kind of ominous but is actually really nifty. Since you can supply Tiny Autocomplete with your own little mustache-like template string, there's no magic "name" or "id" attribute or whatever. You can feed it a thumbnail, an icon, 5 levels of `<div>` wrapping - the sky's the limit. You can swap out the templating for your own engine, too.

Note: while you can use Tiny Autocomplete with a local data source, the pattern matching implementation is pretty naïve. Intelligently searching through a result set and returning it is what servers do really well, so maybe that's what you want to do?

## Installation

### Global installation

If you're not using any package managers, put tiny-autocomplete.js after Zepto or jQuery, include tiny-autocomplete.css, and you're good to go!

### Installing through npm

If you're using npm to manage your dependencies, first install the tiny-autocomplete module:

```javascript
npm install -s @varvet/tiny-autocomplete
```

Then require it in your files and activate it after your jQuery or Zepto library, like so:

```javascript
var $ = require("jquery");
require("@varvet/tiny-autocomplete")($, window);
```

## Demos

There are some demos included. We should probably put up a server to host them but for now you can check them out via [http-server](https://www.npmjs.org/package/http-server) or something like that. Look at the HTML files to see what they're doing.

## Usage

### Initialize an autocomplete field

```javascript
$(".autocomplete").tinyAutocomplete({
  /* settings */
});
```

### Settings

#### url:

```javascript
$(".autocomplete").tinyAutocomplete({ url: "http://www.example.com/search" });
```

The url to run search queries against.

#### data:

```javascript
$('.autocomplete').tinyAutocomplete({ data:[...] });
```

Used if you want to search through some local JSON data, instead of requesting data from a server. Tiny Autocomplete will search _all_ the fields in your data and return the items where it found a match.

#### method:

```javascript
$(".autocomplete").tinyAutocomplete({ method: "post" });
```

Method to use - defaults to `get` but you can change it to `post`.

#### onSelect:

```javascript
$('.autocomplete').tinyAutocomplete({ onSelect:function(el, val){...} });
```

This is the method that fires when user has selected an option in the autocomplete list, and it's scoped to the field the user is typing in. You get to decide what to do with the information - possibly load data via AJAX or redirect the user to the selected object's page or something even more clever. If user has just pressed enter without selecting an object, or has selected the lastItemTemplate object, the `val` argument will be blank and you should act on \$(this).val() instead. Maybe go to the full search page?

#### minChars:

```javascript
$(".autocomplete").tinyAutocomplete({ minChars: 3 });
```

Minimum number of characters user has to type before autocomplete kicks in. Defaults to `2`.

#### scrollOnFocus:

```javascript
$(".autocomplete").tinyAutocomplete({ scrollOnFocus: true });
```

For vertically-challenged touch devices that pop up an on-screen keyboard, it's a good idea to scroll the search field to the top. Tiny Autocomplete tries to guess if it's needed, but you might have a more intelligent heuristic. Then use that to set scrollOnFocus.

#### keyboardDelay:

```javascript
$(".autocomplete").tinyAutocomplete({ keyboardDelay: 400 });
```

The delay between user releasing the key and search being performed. Set this high to avoid firing lots of requests while the user is typing, or low for more responsiveness. Defaults to `200` and can be set to `null` to bypass it altogether.

#### queryProperty:

```javascript
$(".autocomplete").tinyAutocomplete({ queryProperty: "term" });
```

The name of the request property to send in GET or POST request. Defaults to `q`.

#### markAsBold:

```javascript
$(".autocomplete").tinyAutocomplete({ markAsBold: false });
```

Compare the result set with the typed string and wrap any matches in a `<strong />` tag. Processes all the properties in the matched JSON object. Defaults to `true`.

#### grouped:

```javascript
$(".autocomplete").tinyAutocomplete({ grouped: true });
```

Whether or not Tiny Autocomplete should render the JSON as a grouped list. If set to false, it will expect a simple array of objects, if set to true it will expect the first-level objects to have a "data" property containing an array instead:

```javascript
[
  {
    "title": "Larks",
    "coolness": "awesome",
    "data": [
      {"title":"Clapper Lark", "sound":"warbling" ...},
      {"title":"Spike-heeled Lark", "weight":5 ...}
  }
]
```

#### itemTemplate:

```javascript
$(".autocomplete").tinyAutocomplete({
  itemTemplate: '<li class="autocomplete-item">{{id}}: {{title}}</li>'
});
```

Template for an item, using a pseudo-mustache engine. Objects will be passed to the template and it will perform string interpolation, replacing the {{mustachioed}} values with those from the object. For advanced usage, this can be overridden from the JSON-data on a per-group basis, like this:

```javascript
[
  {
    "title": "Larks",
    "template": "<li class='autocomplete-item LARK-ITEM'>Lark: {{title}}</li>",
    "data": [
      {"title":"Clapper Lark"},
      {"title":"Spike-heeled Lark"}
  }
]
```

Default template for an item is `<li class="autocomplete-item">{{title}}</li>`.

#### groupTemplate:

```javascript
$(".autocomplete").tinyAutocomplete({
  groupTemplate:
    '<li class="autocomplete-group"><h2>{{title}}</h2><ul class="autocomplete-items" /></li>'
});
```

Change template for an item group, when using grouped view. Default is

```html
<li class="autocomplete-group">
  <span class="autocomplete-group-header">{{title}}</span>
  <ul class="autocomplete-items" />
</li>
```

Make sure your `groupContentName` matches the ul class!

#### wrapClasses:

```javascript
$(".autocomplete").tinyAutocomplete({
  wrapClasses: "autocomplete no-autoinit"
});
```

To add classes to the list created by tinyAutocomplete, use wrapClasses. The default is "autocomplete". This is useful, for example, where using tinyAutocomplete with Materializecss which adds it's own formatting where it sees an autocomplete. Adding the class no-autoinit will prevent materialize from doing this.

#### groupContentName:

```javascript
$(".autocomplete").tinyAutocomplete({ groupContentName: ".my-items" });
```

If you have changed the groupTemplate, you might have to tell Tiny Autocomplete where to put the group's items. Supply it with a class name and it will append the result items there.

#### lastItemTemplate:

```javascript
$(".autocomplete").tinyAutocomplete({
  lastItemTemplate:
    '<li class="autocomplete-item autocomplete-item-last">Show all results for "{{title}}"</li>'
});
```

Set this template if you want to display a last item without any data bound to it. The field's current value will be supplied as {{title}}. This is useful for giving users an "all results for X" option at the bottom of the list.

#### templateMethod:

```javascript
$(".autocomplete").tinyAutocomplete({ templateMethod: _.template });
```

You can use this to override Tiny Autocomplete's cheap-and-cheerful templating function with something more powerful. The template function takes two arguments. The first argument is the template itself (which is a string) and the second is the object that Tiny Autocomplete passes in to the template to render it. You can use underscore's "template" method as a drop-in replacement and there are probably others that work the same way.

#### showNoResults:

```javascript
$(".autocomplete").tinyAutocomplete({ showNoResults: true });
```

By default Tiny Autocomplete will not show "No results" message when no data is found. Enabling this option will display the "No results found for foo" message.

#### noResultsTemplate:

```javascript
$(".autocomplete").tinyAutocomplete({
  noResultsTemplate:
    '<li class="autocomplete-item">No results for {{title}}</li>'
});
```

Template for the "No results found" message. Will only be shown if `showNoResults` option is enabled. Uses same templating engine as the other templates.

#### maxItemsOnMobile

```javascript
$(".autocomplete").tinyAutocomplete({ maxItemsOnMobile: 5 });
```

Limit the number of items displayed when the screen width is smaller than the mobileWidth setting (which is by default 700px).
See [mobileWidth](#mobilewidth).

By default Tiny Autocomplete will set maxItemsOnMobile to **3**

#### mobileWidth

```javascript
$(".autocomplete").tinyAutocomplete({ mobileWidth: 500 });
```

See [maxItemsOnMobile](#maxitemsonmobile)

By default Tiny Autocomplete will set mobileWidth to **700**

### Global defaults

If you want to, you can set global options for all your autocompletes by setting them on the \$.tinyAutocomplete.defaults object, like so:

```javascript
$.tinyAutocomplete.defaults.method = "post";
```

### Change settings at runtime

Easiest way is to just call

```javascript
$('.autocomplete').tinyAutocomplete({ settings... });
```

TinyAutocomplete won't instantiate again, it will just change the settings on the object that's already there. If you want to, you can access the settings object on the element itself - it's in el.tinyAutocomplete.settings.

## Events

Tiny Autocomplete fires some events for you to hook into. The only ones implemented right now are `beforerequest` and `receivedata`. You can use them to maybe show a spinner somewhere else or something like that, but the `receivedata` event is useful for massaging the data you get back from your server, too. If your json is structured a little differently than expected, perhaps something like this:

```javascript
{
  "thing": true,
  "stuff": {
    "data": [{
      "title": "Foo",
      "id": 1
    },
    {
      "title": "Bar",
      "id": 2
    }]
  }
}
```

...you could hook into the `receivedata` event to do this:

```javascript
$(".field")
  .tinyAutocomplete({
    url: "http://www.example.com"
  })
  .on("receivedata", function(ev, tinyAutocomplete, json) {
    // tinyAutocomplete.json is the variable that Tiny Autocomplete uses
    // for displaying the options later on
    tinyAutocomplete.json = json.stuff.data;
  });
```

## License

[MIT](http://johanhalse.mit-license.org)
