fetch("animals.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("animalsData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("animalsData"));
