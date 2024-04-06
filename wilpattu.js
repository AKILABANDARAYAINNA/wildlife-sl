fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("wilpattuData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));
