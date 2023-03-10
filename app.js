//tip animation
$(".tip").hide();

$(".heart").click(() => {
    $(".tip").fadeIn();
})


//For mouse click

$(".drum1").click(() => {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
})

$(".drum2").click(() => {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
})

$(".drum3").click(() => {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
})

$(".drum4").click(() => {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
})

$(".snare").click(() => {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
})

$(".crash").click(() => {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
})

$(".bass").click(() => {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
})

//For keypress

$(document).keypress(function(event){
    switch(event.key){
        case 'a': var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        
        case 's': var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

        case 'd': var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

        case 'f': var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

        case 'j': var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

        case 'k': var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

        case 'l': var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

        default: console.log(event.key);
                break;
    }
})
