var emailInput = document.querySelector("input[placeholder='Enter your email']")
var passwordInput = document.querySelector("input[placeholder='Enter password']")
var signinButton = document.querySelector("button#signinButton")
var pPassEmailIncorrect = document.querySelector("p.pass-email-incorrect")


var localUsers = localStorage.getItem("users");
var localUsersParsed = JSON.parse(localUsers)

if ( localUsers == null){
    var usersArray = [];
}
else{
    usersArray = JSON.parse(localUsers);
};

function signin(){
    
    if(usersArray[0] == undefined){
        return pPassEmailIncorrect.classList.remove("d-none");
    }



    for (var i = 0 ; i < usersArray.length ; i++){
        
        if (usersArray[i].email != emailInput.value && usersArray.length-1 == i){
            pPassEmailIncorrect.classList.remove("d-none");
        }


        else if (usersArray[i].email == emailInput.value){

            pPassEmailIncorrect.classList.add("d-none")
            
            if( passwordValidation(i) ){
                localStorage.setItem("sessionUsername",usersArray[i].name)
                window.location.href = "./Welcome.html";
            }
            else{
                return pPassEmailIncorrect.classList.remove("d-none");
            }

        }
    
    }

}


signinButton.addEventListener("click" , signin )


function passwordValidation(i){
    if (usersArray[i].password == passwordInput.value){
        return true
    }
    return false
}


document.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13){
        signin()
    }
})
