// Initialize EmailJS with your User ID (replace 'YOUR_USER_ID' with your actual EmailJS User ID)
(function() {
    emailjs.init('oU3yJDD2W4qlZIgoD'); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS (replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs)
    emailjs.send('service_2ewten7', 'template_kdzpjmu', {
        from_name: name,
        message: message,
        to_email: 'saswatmohanty2004@gmail.com' // Replace with the email where you want to receive messages
    }).then(function(response) {
        alert('Message sent successfully!');
        // Clear the form
        document.getElementById('messageForm').reset();
    }, function(error) {
        alert('Failed to send message. Please try again. Error: ' + error.text);
    });
});