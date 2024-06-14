function play(){
    let randomNumber1= Math.floor(Math.random()*6)+1; //1-6
    let randomDiceImage="dice"+randomNumber1+".png"; // dice1.png-dice6.png
    let randomImageSource="images/"+randomDiceImage; // will take me to the actual name

    let image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageSource);

    let randomNumber2=Math.floor(Math.random()*6)+1; //1-6
    let randomDiceImage2="dice"+randomNumber2+".png"; // dice1.png-dice2.png
    let randomImageSource2="images/"+randomDiceImage2; // will take me to the actual game
    
    let image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageSource2);
// Displays who is the winner
    if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player 1 Wins!"; //if player 1 wins this will display 
    else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins!"; //if player 2 wins this will display
    else
    document.querySelector("h1").innerHTML="Draw"; //if they neither wins they will display draw

}

let myButton=document.querySelector("#play");
myButton.addEventListener("click",play);

