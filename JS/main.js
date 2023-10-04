var btn = document.querySelector("#btn");

var request = 'https://api.publicapis.org/entries'

// var teamName = document.querySelector("#team").value;
// function grabText()
function btnclick(){
    // fetch(request)
    //     .then((response) => {
    //         if(response == 200){
    //             console.log("hi")
    //         } else if(response == 404){
    //             window.location.href = "/404.html"
    //         }
    //         console.log(response)
    var myHeaders = new Headers();
var APIKey = "fe1bf34ae2c8ad677700a87684d763a9"
myHeaders.append('x-rapidapi-key', APIKey);
myHeaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect:'follow'
  };
  var teamName = "lions"
  fetch(`https://v1.american-football.api-sports.io/teams?search=${teamName}`,requestOptions)
    .then(response => response.json())
    .then(result => console.log((result.response[0])))
    .catch(error => console.log('error', error));
        
    }
        
//         var myHeaders = new Headers();
// var APIKey = "fe1bf34ae2c8ad677700a87684d763a9"
// myHeaders.append('x-rapidapi-key', APIKey);
// myHeaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

// var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect:'follow'
//   };
  
//   fetch("https://v1.american-football.api-sports.io/teams",requestOptions)
//     .then(response => response.text())
//     .then(result => console.log((result.teams[20])))
//     .catch(error => console.log('error', error));
        
//     }



// // var myheaders = new Headers();
// // var APIKey = "fe1bf34ae2c8ad677700a87684d763a9"
// myheaders.append('x-rapidapi-key', APIKey);
// myheaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

// var requestOptions = {
//     method: 'GET',
//     headers: myheaders,
//     redirect: 'follow'
//   };
  
//   fetch("https://v1.american-football.api-sports.io/{endpoint}", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

btn.addEventListener("click",btnclick())
