fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("wilpattuData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));

document.getElementById("mainhead").innerHTML = data.mainSections[0].title;

document.getElementById("wilpara").innerHTML = data.mainSections[1].paragraph;

document.getElementById("biohead").innerHTML = data.mainSections[2].title;
document.getElementById("biopara").innerHTML = data.mainSections[2].paragraph;
