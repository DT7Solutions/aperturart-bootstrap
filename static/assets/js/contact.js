
function hello(){
  // event.preventdefult();
  debugger
  let fname = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;
  
  let mes = "Name:" + fname + "<br/> For email:" +  email + "<br/> Subject:" + subject + "<br/> Message:" + message
   
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "aperturart@gmail.com",
      Password : "6F7C8AC4D52994A9B70E2EB933EB0D7BE19B",
      To : 'priya4241honey@gmail.com',
      From : "aperturart@gmail.com",
      Subject : subject,
      Body : mes
  }).then(
    alert("sucessfully sending email!")
  );
  
}
    
