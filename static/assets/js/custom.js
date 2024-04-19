(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();



 // Navbar on scrolling

 $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".main-header").addClass("nav-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".main-header").removeClass("nav-active");
        }
    });
});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	            items:3
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()

})(jQuery);



let currentStep = 1;

function showStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
        step.style.flexDirection = 'column';
    });
    document.getElementById(`step${stepNumber}`).style.display = 'flex';
}

function nextStep() {
    currentStep++;
    showStep(currentStep);
}

function validateStep1() {
    const starRating = document.querySelector('.star-rating').getAttribute('data-rating');
    const feedback = document.querySelector('.feedback-options button.active');
    const starErrorMessage = document.querySelector('.star-error-message');
    const feedbackErrorMessage = document.querySelector('.feedback-error-message');

    if (starRating !== '') {
        starErrorMessage.style.display = 'none';
    } else {
        starErrorMessage.textContent = 'Please rate our services.';
        starErrorMessage.style.display = 'block';
    }
    if (feedback !== null) {
        feedbackErrorMessage.style.display = 'none';
    } else {
        feedbackErrorMessage.textContent = 'Please provide feedback.';
        feedbackErrorMessage.style.display = 'block';
    }
    if (starRating !== '' && feedback !== null) {
        nextStep();
    }
}

function validateStep2() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const nameErrorMessage = document.querySelector('.name-error-message');
    const emailErrorMessage = document.querySelector('.email-error-message');
    const phoneErrorMessage = document.querySelector('.phone-error-message');

    if (name !== '') {
        nameErrorMessage.style.display = 'none';
    } else {
        nameErrorMessage.textContent = 'Please enter your name.';
        nameErrorMessage.style.display = 'block';
    }
    if (email !== '') {
        emailErrorMessage.style.display = 'none';
    } else {
        emailErrorMessage.textContent = 'Please enter a valid email address.';
        emailErrorMessage.style.display = 'block';
    }
    if (phone !== '') {
        phoneErrorMessage.style.display = 'none';
    } else {
        phoneErrorMessage.textContent = 'Please enter your phone number.';
        phoneErrorMessage.style.display = 'block';
    }
    if (name !== '' && email !== '' && phone !== '') {
        nextStep();
    }
}

function submitForm() {
    const feedbackData = {
        "rating": document.querySelector('.star-rating').getAttribute('data-rating'),
        "feedback": document.querySelector('.feedback-options button.active').getAttribute('data-value'),
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "feedbackText": document.getElementById('feedback').value,
        "suggestions": document.getElementById('suggestions').value
    };

    console.log(JSON.stringify(feedbackData));

    const confirmationMessage = document.querySelector('.confirmation-message');
    const errorSubmitMessage = document.querySelector('.feedback-submit-error');

    if (Object.values(feedbackData).every(value => value !== "")) {
        confirmationMessage.textContent = 'Thank you for your feedback!';
        confirmationMessage.style.display = 'block';
        errorSubmitMessage.style.display = 'none';
        
		const serviceID = "service_acvejvb";
		const templateID = "template_hzgo3kx";
		// emailjs.send("Service_ID", "Template_ID", formData)
        emailjs.send(serviceID, templateID, feedbackData)
            .then(function(response) {
                console.log('Email sent successfully:', response.status, response.text);
                alert("Thank you, " + feedbackData.name + "! Your message has been sent successfully.");
				// document.getElementById('feedbackForm').reset();
				// Manually reset form fields
				document.getElementById('name').value = '';
				document.getElementById('email').value = '';
				document.getElementById('phone').value = '';
				document.getElementById('feedback').value = '';
				document.getElementById('suggestions').value = '';
				document.querySelector('.star-rating').setAttribute('data-rating', '');
				document.querySelectorAll('.star-rating .star').forEach(star => star.classList.remove('selected'));
				document.querySelectorAll('.feedback-options button').forEach(button => button.classList.remove('active'));
            }, function(error) {
                console.error("Email sending failed:", error);
                alert("Sorry ...!, " + feedbackData.name + ". Oops! Something went wrong. Please try again later.");
            });
    } else {
        errorSubmitMessage.textContent = 'Error: Please fill in all fields.';
        errorSubmitMessage.style.display = 'block';
        confirmationMessage.style.display = 'none';
    }

    currentStep = 4;
    showStep(currentStep);

    setTimeout(function () {
        currentStep = 1;
        showStep(currentStep);
        document.querySelectorAll('.error-message').forEach(message => {
            message.style.display = 'none';
        });
        document.querySelectorAll('.star-rating, .feedback-options, input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(element => {
            element.style.borderColor = '#ccc';
        });
        confirmationMessage.style.display = 'none';
        errorSubmitMessage.style.display = 'none';
    }, 5000);
}

document.querySelectorAll('.star-rating .star').forEach(star => {
    star.addEventListener('click', function () {
        const value = parseInt(this.getAttribute('data-value'));
        const stars = document.querySelectorAll('.star-rating .star');
        stars.forEach((s, index) => {
            if (index < value) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
        document.querySelector('.star-rating').setAttribute('data-rating', value.toString());
    });
});

document.querySelectorAll('.feedback-options button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.feedback-options button').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(input => {
    input.addEventListener('input', function () {
        this.style.borderColor = '#007bff';
        const errorMessage = this.parentElement.querySelector('.error-message');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    });
});
