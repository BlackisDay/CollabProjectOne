// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var request = 'https://api.publicapis.org/entries'
var idteam = document.getElementById("IdHere");
var teamhere = document.getElementById("TeamHere")
var teamNames = document.getElementById("TeamNames")
var logoHere = document.getElementById("logoHere")


  var myHeaders = new Headers();
var APIKey = "53149e744c07b850867cccdcf69e6b2b"
myHeaders.append('x-rapidapi-key', APIKey);
myHeaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect:'follow'
  };
  var teamName = "dolphins"
  fetch(`https://v1.american-football.api-sports.io/teams?search=${teamName}`,requestOptions)
    .then(response => response.json())
    .then(result => idteam.textContent = "team id:" + result.response[0].id)
    .then(result => teamNames.textContent = "Team Name" + result.response[0].name)
    .then(result => teamNames.innerHTML = "logo" + result.response[0].logo)
    .catch(error => console.log('error', error));
