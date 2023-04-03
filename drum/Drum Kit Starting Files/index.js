var nofdru = document.querySelectorAll(".drum").length;

for(var i =0;i<nofdru;i++){



document.querySelector(".drum")[i].addEventListener("click",function(){ 

    alert("it's a click");
});
}