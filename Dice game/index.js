function random(){
    var randomNumber1=Math.floor((Math.random() * 6)+1);
    return randomNumber1;
}

function play(){
var rand1=random();
var rand2=random();
if(rand1>rand2){
    document.querySelector(".container h1").textContent="Player1 Wins 🏆";
}
else if(rand2>rand1){
    document.querySelector(".container h1").textContent="Player2 Wins 🏆";
}
else{
    document.querySelector(".container h1").textContent="DRAW!";
}
image="images/dice"+rand1+".png";
document.querySelector(".img1").setAttribute("src",image);
image="images/dice"+rand2+".png";
document.querySelector(".img2").setAttribute("src",image);
}
document.querySelector(".btn").onclick=function() {play()};

