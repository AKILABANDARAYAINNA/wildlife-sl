document.addEventListener("DOMContentLoaded", function() {
    // Other existing code...

    const subscriptionForm = document.getElementById("subscriptionForm");
    const emailInput = document.getElementById("emailInput");

    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value;
        if (validateEmail(email)) {
            saveSubscription(email);
            alert("Subscription successful!");
            emailInput.value = ""; // Clear the input field after subscription
        } else {
            alert("Please enter a valid email address!");
        }
    });

    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    function saveSubscription(email) {
        let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
        subscriptions.push(email);
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    }
});
