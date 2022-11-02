
import "./App.css"

function App() {
  
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      const tom1 = new Audio('./sounds/tom-1.mp3')
      // var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

  return (
    <div className="body">
        <h1 id="title">Trang music</h1>
          <div class="set">
            <button class="w drum">w</button>
            <button class="a drum">a</button>
            <button class="s drum">s</button>
            <button class="d drum">d</button>
            <button class="j drum">j</button>
            <button class="k drum">k</button>
            <button class="l drum">l</button>
          </div>
      <footer>
           By Trang Company Music
      </footer>
  </div>
  );
}

export default App;
