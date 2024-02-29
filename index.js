//Global for Different Audios
const audioW = new Audio('sounds/tom-1.mp3');
const audioA = new Audio('sounds/tom-2.mp3');
const audioS = new Audio('sounds/tom-3.mp3');
const audioD = new Audio('sounds/tom-4.mp3');
const audioJ = new Audio('sounds/snare.mp3');
const audioK = new Audio('sounds/crash.mp3');
const audioL = new Audio('sounds/kick-bass.mp3');

//play sound when clicked on
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    if(button.innerText == "w"){
        button.addEventListener('click', () =>{
            return audioW.play();
        });
    } else if (button.innerText == "a"){
        button.addEventListener('click', ()=>{
            return audioA.play();
        });
    } else if (button.innerText == "s"){
        button.addEventListener('click', ()=>{
            return audioS.play();
        });
    } else if (button.innerText == "d"){
        button.addEventListener('click', ()=>{
            return audioD.play();
        });
    } else if (button.innerText == "j"){
        button.addEventListener('click', () =>{
            return audioJ.play();
        });
    } else if (button.innerText == "k"){
        button.addEventListener('click', () =>{
            return audioK.play();
        });
    //audio L
    } else {
        button.addEventListener('click', () =>{
            return audioL.play();
        });
    }

});