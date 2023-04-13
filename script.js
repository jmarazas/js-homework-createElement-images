console.log("==namesV1===")

var name1 = "Jon Snow"
var name2 = "Cersei Lannister"
var name3 = "Daenerys Targaryen"
var name4 = "Theon Greyjoy"
var name5 = "Tyrion Lannister"
var name6 = "Arya Stark"
console.log(name1 + " " + name6)

console.log("==namesV2===")
var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]
console.log(names[0] + " " + names[5])


var question2 = prompt("Įveskite skaičių nuo 1 iki 6")

while(isNaN(question2)){
    question2 = prompt("Įveskite skaičių nuo 1 iki 6")
}

if(question2 == 1) {

    var img = document.createElement("img");
    img.src = "./img/Jon_Snow.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 == 2) {
    var img = document.createElement("img");
    img.src = "./img/Cersei_Lannister.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 == 3) {
    var img = document.createElement("img");
    img.src = "./img/Daenerys_Targaryen.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 == 4) {
    var img = document.createElement("img");
    img.src = "./img/Theon_Greyjoy.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 == 5) {
    var img = document.createElement("img");
    img.src = "./img/Tyrion_Lannister.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 == 6) {
    var img = document.createElement("img");
    img.src = "./img/Arya_Stark.jpg";
    var src = document.getElementById("header");
    src.appendChild(img);
} else if(question2 >= 6) {
    alert("Blogai suvestas numeris. Įveskite skaičių nuo 1 iki 6")
} else if(question2 <= 0) {
    alert("Blogai suvestas numeris. Įveskite skaičių nuo 1 iki 6")
}