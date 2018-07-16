alert("Welcome to Nails and Snails!");
var state = 0;

function clickFunction() {
document.getElementById("test").style.fontSize = "500px";

}
function changeImage() {
  if (state == 0)
{
  document.getElementById("changethis").src = "IMG_0164.jpg";
  state = 1;
}
  else if(state == 1) {
    document.getElementById("changethis").src = "IMG_0491.jpg";
    state = 0;
  }
}

var audio = document.getElementById("player");
var audio_state = 0;
audio.addEventListener('ended', function() {
  if (state == 0){
    document.getElementById("player").src="WASTE.mp3";
    state = 1;
  }
}, false);
