fetch("yala.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("yalaData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));

document.getElementById("yalamain").innerHTML = data.mainSections[0].title;
document.getElementById("yalapara01").innerHTML = data.mainSections[0].para01;
document.getElementById("yalapara02").innerHTML = data.mainSections[0].para02;

document.getElementById("yalabiohead").innerHTML = data.mainSections[1].title;
document.getElementById("motionpara").innerHTML = data.mainSections[1].paragraph;



