fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("departmentData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));
