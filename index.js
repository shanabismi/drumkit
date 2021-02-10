for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  // detecting button press
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var clickedButton = this.innerHTML;
    makeSound(clickedButton);
    makeFlash(clickedButton);

    console.log(clickedButton);
    // this.style.color="black";
  });

}

// --- To print in console what event is happened--

// document.addEventListener("keydown",function(event){
//   console.log(event);
// });


// detecting keyboard press
document.addEventListener("keydown", function(event) {
  let pressedKey = event.key;
  makeSound(pressedKey);
  makeFlash(pressedKey);
  console.log(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      alert("invalid keypress");
  }
}

function makeFlash(key){


document.querySelector("."+key).classList.add("pressed");
// this function is used to remove the flash effect after 100 milliseconds
setTimeout(function(){

  document.querySelector("."+key).classList.remove("pressed");
}, 100);

}




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
