fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("leopardData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("leopardData"));

document.getElementById("yalahead").innerHTML = data.mainSections[0].yala.title;
document.getElementById("yalapara01").innerHTML = data.mainSections[0].yala.para01;
document.getElementById("yalapara02").innerHTML = data.mainSections[0].yala.para02;
document.getElementById("yalapara03").innerHTML = data.mainSections[0].yala.para03;

document.getElementById("wilpattuhead").innerHTML = data.mainSections[1].wilpattu.title;
document.getElementById("wilpattupara01").innerHTML = data.mainSections[1].wilpattu.para01;
document.getElementById("wilpattupara02").innerHTML = data.mainSections[1].wilpattu.para02;

document.getElementById("hortonhead").innerHTML = data.mainSections[2].hortonplains.title;
document.getElementById("hortonpara01").innerHTML = data.mainSections[2].hortonplains.para01;
document.getElementById("hortonpara02").innerHTML = data.mainSections[2].hortonplains.para02;

document.getElementById("rkhead").innerHTML = data.mainSections[3].roadkill.title;
document.getElementById("rkpara").innerHTML = data.mainSections[3].roadkill.para;

document.getElementById("conservhead").innerHTML = data.mainSections[5].conservation.title;
document.getElementById("conservpara").innerHTML = data.mainSections[5].conservation.para;















