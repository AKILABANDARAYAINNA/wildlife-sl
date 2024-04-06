fetch("introduction.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("intoductionData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("introductionData"));

