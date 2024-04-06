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
document.getElementById("introPara01").innerHTML = data.mainSections[0].content;

document.getElementById("safarihead").innerHTML = data.mainSections[1].title;
