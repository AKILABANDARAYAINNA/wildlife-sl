document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            var validUser = data.users.find(function(user) {
                return user.username === username && user.password === password;
            });

            if (validUser) {
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching user credentials:', error));
});
