
// after load
$(document).ready(function() {
	
	// after 2 sec
	setTimeout(function() {
		
		// if ads are blocked
		if($('#carbonads').length == 0){
			
			// show the help notice
			$('#help-notice').show();
			
			// animate it in
			$('#help-notice').animate({ right: '0' }, 1000);
		}
		
	}, 2000);
});