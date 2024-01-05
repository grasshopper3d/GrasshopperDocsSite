
// after load
$(document).ready(function() {
	
	// after 1 sec
	setTimeout(function() {
		
		// if ads are blocked
		if($('#carbonads').length == 0){
			
			// show the help notice
			$('#help-notice').show();
			
			// animate it in
			$('#help-notice').animate({ right: '0' }, 500);
		}
		
	}, 1000);
});