// This is jQuery. Our script tag is at teh top. Therefore we shoudl start with...
// Wait till the DOM is ready.
$(document).ready(()=>{
	// submit listener/event is unique to forms
	$('.sign-up-form').submit((event)=>{
		// Browser is, by default, going to submit this form.
		// It will send it to the "action" attribute
		// There is no action, so it just reloads.
		// preventDefault against any event object, will prevent the browser 
		// from doing what it normally does
		event.preventDefault();
		console.log("User submitted the form!");
		// The fullName needs to be at least 2 characters
		// Input tags have values. Almost everything else has innerHTML

		// Target all the input fields...
		// loop through all, and check the length...

		// console.log(($('.form-wrapper input')))

		// .map((inputTagMapIsOn,i)=>{
		// 	console.log(inputTagMapIsOn)
		// })

		$('.form-wrapper input').each(function(){
			// console.log($(this).val(''));
			// get the class of the thing we are on.
			// i.e., password, adress, phone, etc.
			// and IF it's empty, go grab the thing with the class
			// that matches it + '-error'
			var userInput = $(this).val();
			var thisClass = $(this).attr('class');
			// console.log(`${thisClass} has a value of ${userInput}`)
			// console.log(userInput);
			var errorClass = `.${thisClass}-error`;
			if(userInput === ""){
				// if we dont give .html() any arg, it will GET the contents
				// if we send an arg to .html() it will SET the contents to the arg
				$(errorClass).html("Field must not be empty.")
				$(errorClass).show();
				// $('.email-erro').html()
			}else{
				// $(errorClass).html("")
				$(errorClass).hide();
			}
		});

		// Get the value of the password input
		var password = $('.password').val();
		var password2 = $('.password2').val();
		if(password !== password2){
			$('.password-error').html('Your passwords do not match.')
		}

		// var userName = $('.full-name').val();
		// if(userName.length < 2){
		// 	// console.log("USER DIDNT ENTER THEIR REAL NAME (Unless it's T)")
		// 	$('.full-name-error').show();
		// }else{
		// 	$('.full-name-error').hide();
		// }
	});
});