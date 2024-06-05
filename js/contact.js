
// Initialize EmailJS
(function() {
    emailjs.init('qH2EdS6HIxgCIJbvi');
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_udito39', 'template_8di0w0a', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});