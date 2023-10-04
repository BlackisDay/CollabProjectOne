var btn = document.querySelector("#submitTeam")

var grabTeam = function myFunction(){
    localStorage.getItem("FavoriteTeam");
}

btn.addEventListener("click",grabTeam())