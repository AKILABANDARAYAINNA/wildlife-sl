fetch("animals.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("animalsData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("animalsData"));

document.getElementById("animalhead").innerHTML = data.mainSections[0].indigenousAnimals.title;
document.getElementById("animalpara01").innerHTML = data.mainSections[0].indigenousAnimals.para01;
document.getElementById("animalpara02").innerHTML = data.mainSections[0].indigenousAnimals.para02;
document.getElementById("animalpara03").innerHTML = data.mainSections[0].indigenousAnimals.para03;
document.getElementById("animalpara04").innerHTML = data.mainSections[0].indigenousAnimals.para04;
