fetch("login.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("loginData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("loginData"));
