document.addEventListener("DOMContentLoaded", function() {
    const editButton = document.getElementById("editButton");
    const contentEditorPopup = document.getElementById("contentEditorPopup");
    const pageSelector = document.getElementById("pageSelector");
    const htmlContent = document.getElementById("htmlContent");

    editButton.addEventListener("click", function() {
        contentEditorPopup.style.display = "block";
    });

    document.querySelector(".close").addEventListener("click", function() {
        contentEditorPopup.style.display = "none";
    });

    pageSelector.addEventListener("change", function() {
        const selectedPage = pageSelector.value;
        fetch(selectedPage)
            .then(response => response.text())
            .then(data => {
                htmlContent.value = data; 
            })
            .catch(error => console.error('Error loading HTML content:', error));
    });

    document.getElementById("saveChangesButton").addEventListener("click", function() {
        const editedContent = htmlContent.value; 
        const selectedPage = pageSelector.value;
        localStorage.setItem(selectedPage, editedContent);
        alert("Changes saved successfully.");
        contentEditorPopup.style.display = "none";
    });
});

const subscriptionList = document.getElementById("subscriptionList");
const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
subscriptions.forEach(email => {
    const li = document.createElement("li");
    li.textContent = email;
    subscriptionList.appendChild(li);
});
