const btn = document.getElementById('request-table-btn');

document.getElementById('reserve-table-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'table-reserve';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Thank you for your Table Reservation Request, you will recieve a confirmation email from us within a few minutes. We will ONLY contact you if their is an issue with your reservation request!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

console.log("connected")