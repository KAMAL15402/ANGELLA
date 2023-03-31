var random1 =Math.floor(Math.random() * 5) +1 ;
var random2 =Math.floor(Math.random() * 5) +1 ;

var randicimg1 = "./images/dice" + random1 + ".png";
var randicimg2 = "./images/dice" + random2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randicimg1);
image2.setAttribute("src" , randicimg2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS";
}

if(random1 < random2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🚩";
}

if(random1 == random2){
    document.querySelector("h1").innerHTML = "🚩 ITS A DRAWW! 🚩";
}