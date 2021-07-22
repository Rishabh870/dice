var randomNumber1=Math.floor(Math.random() * 6 ) + 1;
var randomNumber2=Math.floor(Math.random() * 6 ) + 1;

var diceNo="images/dice"+ randomNumber1 +".png";
var diceNo1="images/dice"+ randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceNo);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceNo1);
