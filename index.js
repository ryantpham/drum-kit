function handleClick(){
    alert("I got Clicked")
}


const audio = new Audio('sounds/tom-3.mp3');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        audio.play();
    });
});