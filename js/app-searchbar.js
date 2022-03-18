var datePostfix = function(){
	var d = new Date();
	return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
}

$("#docs-sitesearch-inputbox").tinyAutocomplete({
	
	// fetch latest JSON on daily basis
	url: "/feeds/searchBar.json?cache=" + datePostfix(),
	
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