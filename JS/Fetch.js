fetch("images - 2023-01-10T112341.283.jpeg")
    .then(response => {
        // console.log(response);
        return response.blob();
    })
    .then(blob => {
        // console.log(blob);
        document.getElementById("rainbow").src = URL.createObjectURL(blob);
});










const button = document.getElementById("image");
const box = document.getElementById("boxy");
var box_src = document.getElementById("boxy").src;

button.onclick = function changeImage() {

    console.log(box_src);

    console.log("click");

    // If put on Website Update box_src Links

    if (box_src == "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot5.png" ){
        console.log("done");
        box.src = "/Images/GTA-Cars/Office-2/Screenshot6.png"
        box_src = "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot6.png";
    } else if (box_src == "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot6.png" ){
        box.src = "/Images/GTA-Cars/Office-2/Screenshot7.png"
        box_src = "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot7.png";
    } else if (box_src == "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot7.png" ){
        box.src = "/Images/GTA-Cars/Office-2/Screenshot8.png"
        box_src = "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot8.png";
    } else if (box_src == "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot8.png" ){
        box.src = "/Images/GTA-Cars/Office-2/Screenshot9.png"
        box_src = "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot9.png";
    } else if (box_src == "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot9.png" ){
        box.src = "/Images/GTA-Cars/Office-2/Screenshot5.png"
        box_src = "http://127.0.0.1:5500/Images/GTA-Cars/Office-2/Screenshot5.png";
    } else {
        box_src = "images - 2023-01-10T112341.283.jpeg";
    };
  
};



const button2 = document.getElementById("colour");
const box2 = document.getElementById("changeMeColour");

button2.onclick = function changeColour() {

    switch(box2.style.background){
        case "red":
        box2.style.background = "orange"
        break;

        case "orange":
        box2.style.background = "yellow"
        break;

        case "yellow":
        box2.style.background = "green"
        break;
        
        case "green":
        box2.style.background = "blue"
        break;
        
        case "blue":
        box2.style.background = "purple"
        break;

        case "purple":
        box2.style.background = "red"
        break;

        case "default":
        box2.style.background = "aqua"

    };
};






function tellJoke() {
    window.alert("joe mau mau");
}



const bord = document.getElementById("borders");

function Border() {
    bord.className = "border"
}