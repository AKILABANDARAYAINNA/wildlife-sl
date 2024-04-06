fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("leopardData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("leopardData"));
