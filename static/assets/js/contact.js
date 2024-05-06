
















function hello(){
  // event.preventdefult();
  debugger
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;
  
  let mess = "Name:" + name + "<br/> For Email:" +  email + "<br/> Phone:" + phone + "<br/> Subject:" + subject + "<br/> Message:" + message
   

const serviceID = "service_acvejvb";
const templateID = "template_hzgo3kx";

emailjs.send(serviceID, templateID, mess)
  .then(function (response) {
    console.log('Email sent successfully:', response.status, response.text);
    alert("Thank you, " + feedbackData.name + "! Your message has been sent successfully.");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('feedback').value = '';
    document.getElementById('suggestions').value = '';
    document.querySelector('.star-rating').setAttribute('data-rating', '');
    document.querySelectorAll('.star-rating .star').forEach(star => star.classList.remove('selected'));
    document.querySelectorAll('.feedback-options button').forEach(button => button.classList.remove('active'));
  }, function (error) {
    console.error("Email sending failed:", error);
    alert("Sorry ...!, " + feedbackData.name + ". Oops! Something went wrong. Please try again later.");
  });
} 



