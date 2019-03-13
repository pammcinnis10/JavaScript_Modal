// MODAL

$(function() {

	const modal = $('.modal');
	const profile = $('.profile');
	const form = $('form');

	// hide the modal and profile
	modal.hide();
	profile.hide();

	// create object of classes for all the inputs 
	const profileQuestions = $('input').map(function() {
		let className = $(this).attr('class');
		return className;
	});

	// click 'create account' and modal appears
	$('.createProfile').on('click', function() {
		modal.slideToggle('slow');
	});

	// click on x and modal closes
	$('.x').on('click', function() {
		modal.hide();	
	});

	// on form submit, hide modal and show profile
	$('form').on('submit', function(event) {

		// prevent page refresh
		event.preventDefault();

		// close modal
		modal.slideToggle();

		// hide 'Create Profile' button
		$('.createProfile').hide();

		// add user's answers to the profile
		$('li').each(function() {
			let listClass = $(this).attr('class');
			for (let i = 0; i < profileQuestions.length; i++) {
				let profileClass = profileQuestions[i]
				let profileAnswer = ($('input.' + profileClass).val());
				let nameValue = $('input.name').val()
				if (listClass == profileClass) {
					$(this).append(`${profileAnswer}`);
				}
			};
		});		

		// add name to title of profile
		const name = $('input.name').val().toUpperCase();
		$('h2').append(`${name}'S PROFILE`);

		// delay profile popping up by 1s
		setTimeout(function(){profile.slideToggle()}, 1000);	
	});

});

