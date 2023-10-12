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
var logoImg = document.getElementById("logoHere")
var flagImg = document.getElementById("FlagHere")


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
    .then(result => {
        idteam.textContent = "Team ID:" + result.response[0].id,
        teamNames.textContent= result.response[0].name,
        teamhere.textContent= "We present to you,the " + result.response[0].name + "!",
        logoImg.setAttribute("src",result.response[0].logo),
        logoHere.append("src")
        flagImg.setAttribute("src",result.response[0].country.flag)
        flagImg.append("src")

})
    .catch(error => console.log('error', error));
