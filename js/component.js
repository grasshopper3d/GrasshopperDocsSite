
// LOAD THE WIKI DATA

var compoName = $('title').text().split(' - ')[0];
var wikiPage = $('meta[property=wiki-page]').attr("content");
if (wikiPage != null){


	// test 2
	//wikiPage = "GH Curve Arc_3Pt.md";
	
	// get wiki page name
	wikiPage = wikiPage.split(" ").join("-");
	console.log(wikiPage);
	
	// get URLs
	var rawURL = "https://raw.githubusercontent.com/wiki/rhino/rhino.github.io/"+wikiPage;
	var editURL = "https://github.com/rhino/rhino.github.io/wiki/"+ wikiPage.split(".md").join("")+"/_edit";
	var loginURL = "https://github.com/login";
	
	var addToPage = function(html){
	
		$div = $(".content");
		
		// add buttons to to page
		$("<div><p style='font-size:16px'><a href="+loginURL+">Login</a> into Github then <a href='"+editURL+"'>Edit</a></p></div>")
			.css("text-align", "right")
			.css("float", "right")
			.appendTo($div);
			
		// add header to page
		$("<h2></h2>")
			.text("Wiki")
			.css("width", "200px")
			.appendTo($div);
		
		// add text to page
		$para = $("<div id='wiki'>" + html + "</div>");
		$para.appendTo($div);
		
		// override CSS styles
		$para.find('p').css("font-size", "16px");
		$para.find('li').css("font-size", "16px");
		$para.find('ul').css("padding-left", "20px");
		$para.find('li').css("list-style", "disc outside none");
		
	}
	
	// download it from github
	$.ajax({

		// test : https://raw.githubusercontent.com/wiki/rhino/rhino.github.io/Home.md

		url: rawURL,
		dataType: 'text',
		success: function(results){
		
			// get MD
			var markdown = results.toString();
			
			// convert MD to HTML
			var kramed = window.kramed;
			kramed.setOptions({
			  renderer: new kramed.Renderer(),
			  gfm: true,
			  tables: true,
			  breaks: false,
			  pedantic: false,
			  sanitize: true,
			  smartLists: true,
			  smartypants: false
			});
			var html = kramed(markdown);
			
			addToPage(html);
			
		},
		error: function(){
			// add default message
			addToPage("<h3>Be the first to contribute your tips about the <b>"+compoName+"</b> component!</h3>");
		}
	});


}