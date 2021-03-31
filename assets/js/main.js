jQuery(document).ready(function(){

	jQuery(".owl-carousel1").owlCarousel(
	{
		loop:false,
		center: false,
		margin:30,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:2,
				nav:false,

			}
		}
	}
	);

	jQuery(".owl-carousel2").owlCarousel(
	{
		loop:true,
		center: false,
		margin:0,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true,

			}
		}
	}
	);

	jQuery(".owl-carousel3").owlCarousel(
	{
		loop:true,
		center: true,
		margin:30,
		responsiveClass:true,
		nav:false,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:3,
				nav:false,

			}
		}
	}
	);



	function myFunction(x) {
		x.classList.toggle("change");
	}



	$('.scroll_to').click(function(e){

		var jump = $(this).attr('href');

		var new_position = $(jump).offset();

		$('html, body').stop().animate({ scrollTop: new_position.top }, 500);

		e.preventDefault();

	});



	/* Contact form validation */
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				submitHandler: function(form) {   
					var $submit = $('.submitting'),
					waitText = 'Submitting...';

					$.ajax({    
						type: "POST",
						url: "php/sendEmail.php",
						data: $(form).serialize(),

						beforeSend: function() { 
							$submit.css('display', 'block').text(waitText);
						},
						success: function(msg) {
							if (msg == 'OK') {
								$('#form-message-warning').hide();
								setTimeout(function(){
									$('#contactForm').fadeOut();
								}, 1000);
								setTimeout(function(){
									$('#form-message-success').fadeIn();   
								}, 1400);

							} else {
								$('#form-message-warning').html(msg);
								$('#form-message-warning').fadeIn();
								$submit.css('display', 'none');
							}
						},
						error: function() {
							$('#form-message-warning').html("Something went wrong. Please try again.");
							$('#form-message-warning').fadeIn();
							$submit.css('display', 'none');
						}
					});       
				}

			} );
		}
	};


	$(function(){
		contactForm();
	});

	/* preloader function */
	var Body = $('body');
	Body.addClass('preloader-site');


});



$(window).on('load', function() {
	$('.preloader-wrapper').fadeOut();
	$('body').removeClass('preloader-site');
});