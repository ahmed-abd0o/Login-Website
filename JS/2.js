
var container = localStorage.getItem("sessionUsername")
var button = document.querySelector("button.btn")

console.log(container);

if(container == null){
    alert("Signin First Please Don't cheat")
    window.location.href = "./Signin.html"
    container = "Cheater"
}

button.addEventListener("click" , function(){
    localStorage.removeItem("sessionUsername")
    window.location.href = "./Signin.html"
})


document.querySelector("p.welcome-text").append(`${container}`)


console.log('ok');

