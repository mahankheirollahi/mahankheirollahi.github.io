// // Sending Messages From Contact Me Section To Google Sheet
function newMessage(){
     const scriptURL = 'https://script.google.com/macros/s/AKfycbxcBn7ngyQowP9Gm6X0hOenE9ZO75-5Td-vOrvEkiaqnEAiXmzAh6TzYnV4doqIJTt1hw/exec'
     const form = document.forms['submit-to-google-sheet']
     form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
         .then(response => alert('Thanks for Contacting Me 🙏. I Will Get Back To You Soon 👨‍💻'))
         .catch(error => alert('Sorry There Was a Server Issue. Try Again Later 💩'))
     })
}