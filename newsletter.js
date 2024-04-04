document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('email').value; // Get the email input value
    if (validateEmail(email)) {
        // Simulate sending the email address to the server
        setTimeout(function() {
            document.getElementById('message').innerHTML = 'Thank you for subscribing!';
        }, 1000); // Simulating a delay for demonstration purposes
    } else {
        document.getElementById('message').innerHTML = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    // Simple email validation using a regular expression
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}