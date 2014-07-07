/*******************************************
	egrModal created by Eric G Rogers 2014
********************************************

This plugin creates a blank modal center screen and repositions to center on browser resize. Clicking the overlay, hitting ESC, or simply clicking on the X will close the modal.
Feel free to style the modal in any manner you see fit.


***********************************************************************************************
If you use other libraries that conflict with this plugin, try 'jQuery.noConflict();'
*/


// Create a private scope.
(function($){

	$.fn.egrModal = function(){

		return this.each(function(){

			// hide the markup that is going to be used in the modal.
			$(this).hide();

			// grab the html of the element
			var content = $(this).html();
			// create the overlay and append it to the document body
			var overlay = $('<div class = "overlay"></div>').appendTo(document.body).hide();
			// create the modal, append the content, and append it to the document body. 
			var modal = $('<div class="modal">'+content+'</div>').appendTo(document.body).hide();

			// function that opens the modal and sets it to center screen.
			var openModal = function(){
				overlay.add(modal).show().css({opacity:0});
				overlay.animate({opacity:0.8});
				modal.
				css({
					top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
					left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
				}).
				stop(true).
				animate({opacity:1});

				// add the close button to the modal, or if you don't want the button, simply remove the next 2 lines of code.
				$('.modal').append('<button class="closeBtn">X</button>');
				$('.closeBtn').on('click', closeModal);
			};

			// recenter the modal on browser resize
			var moveModal = function(){
				modal.stop(true).animate({
					top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
					left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
				}, 1200);
			};

			// close the modal by fading it out and then hiding it.
			var closeModal = function(){
				overlay.add(modal).animate({opacity:0}, function(){
					$(this).hide();
				});
			};


			//------------- Event Listeners ------------------------

			// call moveModal on window resize, and listen for ESC key presses.
			$(window).on('resize', moveModal).on('keyup', function(e){
				if(e.which === 27){
					closeModal();
				}
			});

			// listen for the user to click on the modal-open
			$('.modal-open').show().on('click', function(e){
				openModal();
				e.preventDefault();
				return false;
			});
			
			// if the user clicks on the overlay, close the modal
			overlay.on('click', closeModal);
		});
	};
}(jQuery));