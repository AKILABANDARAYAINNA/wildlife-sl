fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("departmentData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));

document.getElementById("depthead").innerHTML = data.mainSections[0].introduction.title;
document.getElementById("deptpara01").innerHTML = data.mainSections[0].introduction.para01;
document.getElementById("deptpara02").innerHTML = data.mainSections[0].introduction.para02;

document.getElementById("protecthead").innerHTML = data.mainSections[1].protectedAreas.title;

document.getElementById("maphead").innerHTML = data.mainSections[2].map.title;



