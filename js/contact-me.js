// Sending Messages From Contact Me Section To My Email 
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_099p67b', 'template_r5kzj8c','#contact-form','DIpz1iB4oF7eUmRl2' )
      .then(function() {
       alert('Thanks for Contacting Me by Sending an Email 📮 . I Will Get Back To You Soon 👨‍💻');
      }, function(error) {
       alert('Sorry There Was a Server Issue. Try Again Later');
      });
});
