// Sending Messages From Contact Me Section To Google Sheet
//** Currently Both Sending to Google Sheet and Email Works at the Same Time **
const scriptURL = 'https://script.google.com/macros/s/AKfycbxcBn7ngyQowP9Gm6X0hOenE9ZO75-5Td-vOrvEkiaqnEAiXmzAh6TzYnV4doqIJTt1hw/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Thanks for Contacting Me by Google Sheet 📝 . I Will Get Back To You Soon 👨‍💻'))
    .catch(error => alert('Sorry There Was a Server Issue. Try Again Later 💩'))
})

// Sending Messages From Contact Me Section To My Email 
//** Currently Both Sending to Google Sheet and Email Works at the Same Time **
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_099p67b', 'template_r5kzj8c','#contact-form','DIpz1iB4oF7eUmRl2' )
      .then(function() {
       alert('Thanks for Contacting Me by Sending an Email 📮 . I Will Get Back To You Soon 👨‍💻');
      }, function(error) {
       alert('Sorry There Was a Server Issue. Try Again Later 💩');
      });
});
