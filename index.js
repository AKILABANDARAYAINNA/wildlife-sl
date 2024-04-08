fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("homeData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("homeData"));


document.getElementById("int").innerHTML = data.mainSections[0].title;
document.getElementById("introPara01").innerHTML = data.mainSections[0].para01;

document.getElementById("safarihead").innerHTML = data.mainSections[1].title;
document.getElementById("safaripara01").innerHTML = data.mainSections[1].para01;
document.getElementById("safaripara02").innerHTML = data.mainSections[1].para02;
document.getElementById("safaripara03").innerHTML = data.mainSections[1].para03;

document.getElementById("photographyhead").innerHTML = data.mainSections[2].title;
document.getElementById("photopara01").innerHTML = data.mainSections[2].para01;
document.getElementById("photopara02").innerHTML = data.mainSections[2].para02;

document.getElementById("educationhead").innerHTML = data.mainSections[3].title;
document.getElementById("edupara01").innerHTML = data.mainSections[3].para01;
document.getElementById("edupara02").innerHTML = data.mainSections[3].para02;




