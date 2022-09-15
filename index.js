
//Player 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png = images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




//Player 2

let randomNumber2 =Math.floor(Math.random()* 6) + 1; //1-6

let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1 - 6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




//Top - Message

if(randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNumber1 === randomNumber2 ){
  document.querySelector("h1").innerHTML = "draw!"
}
else{
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}



//below codes are also ok (Top - Message)

// if(randomNumber1 > randomNumber2 ){
//   document.querySelector("h1").innerHTML = "Player 1 wins!"
// }
// else if(randomNumber1 < randomNumber2 ){
//   document.querySelector("h1").innerHTML = "Player 2 wins!"
// }
// else{
//   document.querySelector("h1").innerHTML = "draw!"
// }