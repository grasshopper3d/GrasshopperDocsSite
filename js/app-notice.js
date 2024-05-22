
// after load
$(document).ready(function() {
	
	// after 3 sec
	setTimeout(function() {
		
		// if ads are blocked
		if($('#carbonads').length == 0){
			
			// show the help notice
			$('#help-notice').show();
			
			// animate it in
			$('#help-notice').animate({ right: '0' }, {
				duration: 500,
				complete: function() {
					
					// if ads are shown
					if($('#carbonads').length != 0){
						
						// hide the notice
						$('#help-notice').hide();
					}
				}
			});
		}
		
	}, 3000);
});