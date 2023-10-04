var test = document.querySelector("#test");
var btn = document.querySelector("#btn")
var weatherBtn = function Btn(){
var now = dayjs().format('DD'+'/'+"MM"+"/"+"YYYY")
 var para = document.createElement("p")
console.log(now)
}

btn.addEventListener("click",weatherBtn())

var request = 'https://api.publicapis.org/entries'
var click = function btnclick(){
    fetch(request)
        .then((response) => {
            if(response.status == 200){
                console.log("Received Response")
            } else if(response.status == 404){
                window.location.href = "/404.html" //Add Request+Headers+API when available
            }
            console.log(response)
        })
    }
// btn.addEventListener("click",click())
//     var myHeaders = new Headers();
// var APIKey = "fe1bf34ae2c8ad677700a87684d763a9"
// myHeaders.append('x-rapidapi-key', APIKey);
// myHeaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

// var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect:'follow'
//   };
//   var teamName = "Lions"
//   fetch(`https://v1.american-football.api-sports.io/teams?search=${teamName}`,requestOptions)
//     .then(response => response.json())
//     .then(result => console.log((result.response[0])))
//     .catch(error => console.log('error', error));
        
//     }
        
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


