
$('#toc').toc({
    'selectors': 'h1,h2', //elements to use as headings
    'container': 'body', //element to find all selectors in
    'smoothScrolling': false, //enable or disable smooth scrolling on click
    'prefix': 'toc', //prefix for anchor tags and class names
    'onHighlight': function(el) {}, //called when
    'highlightOnScroll': true, //add class to heading that is currently in focus
    'highlightOffset': 100, //offset to trigger the next headline a new section is highlighted 
    'anchorName': function(i, heading, prefix) { //custom function for anchor name
        return prefix+i;
    },
    'headerText': function(i, heading, $heading) { //custom function building the header-item text
        return $heading.text();
    },
	'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
	  return $heading[0].tagName.toLowerCase();
	}
});
