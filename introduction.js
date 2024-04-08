fetch("introduction.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("introductionData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("introductionData"));

document.getElementById("quotepara").innerHTML = data.mainSections[0].quote;

document.getElementById("locationhead").innerHTML = data.mainSections[0].intro.locationhead
document.getElementById("locpara").innerHTML = data.mainSections[0].intro.locationpara;

document.getElementById("udahead").innerHTML = data.mainSections[0].udawalawa.head;
document.getElementById("udapara").innerHTML = data.mainSections[0].udawalawa.para;

document.getElementById("hortonhead").innerHTML = data.mainSections[0].horton.head;
document.getElementById("hortonpara").innerHTML = data.mainSections[0].horton.para;

document.getElementById("sinharajahead").innerHTML = data.mainSections[0].sinharaja.head;
document.getElementById("sinharajapara").innerHTML = data.mainSections[0].sinharaja.para;

document.getElementById("bundalahead").innerHTML = data.mainSections[0].bundala.head;
document.getElementById("bundalapara").innerHTML = data.mainSections[0].bundala.para;

document.getElementById("tablehead").innerHTML = data.mainSections[0].table.head;











