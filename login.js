document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Fetch user credentials from login.json
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            // Check if the entered username and password match any user
            var validUser = data.users.find(function(user) {
                return user.username === username && user.password === password;
            });

            if (validUser) {
                // If credentials are valid, redirect to dashboard.html
                window.location.href = "dashboard.html";
            } else {
                // If credentials are invalid, display an error message
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching user credentials:', error));
});
