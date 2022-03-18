$("#docs-sitesearch-inputbox").tinyAutocomplete({
	
	url: "/feeds/searchBar.json",
	
	showNoResults: true,
	queryWithSearchTerm: false,
	externalItemsProp: "index",
	
	lastItemTemplate:

	'',
	//'<li class="autocomplete-item autocomplete-item-last">Show all results for "{{title}}"</li>',
  
	// on click  
	onSelect: function(el, val) {
		if (val == null) {
			// 'ALL RESULTS' CLICKED
		} else {
			// SINGLE RESULT CLICKED
			window.location.href = val.link;
		}
	}
});