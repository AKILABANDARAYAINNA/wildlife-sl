fetch("yala.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("yalaData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));
