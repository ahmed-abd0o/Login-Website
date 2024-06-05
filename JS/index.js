var nameInput = document.querySelector("input[placeholder='Enter your name']");
var emailInput = document.querySelector("input[placeholder='Enter your email']");
var passwordInput = document.querySelector("input[placeholder='Enter password']");
var signupButton = document.querySelector("button#signupButton");
//p... the first p means paragragh
var pEmailUsed = document.querySelector("p.email-used");
var pEmailValid = document.querySelector("p.email-valid");
var pInputsRequired = document.querySelector("p.inputs-required");
var pEmailUsed = document.querySelector("p.email-used");
var pSuccess = document.querySelector("p#success");


var localUsers = localStorage.getItem("users");


if ( localUsers == null){
    var usersArray = [];
}
else{
    usersArray = JSON.parse(localUsers);
};


function signup (){
//if someone signed up and clicked again to delete the success paragragh
    pSuccess.classList.add("d-none")
    
    var newUser = {

        name : nameInput.value ,
        email : emailInput.value,
        password : passwordInput.value
        
    }

    // validation if the inputs are empty for name and password , email validation is in its own function on line 43
    if( !passwordValidation(newUser) || !nameValidation(newUser) ){
        return pInputsRequired.classList.remove("d-none");
    }
    pInputsRequired.classList.add("d-none");


    if( !emailValidation()){
        return pEmailValid.classList.remove("d-none")
    }
    pEmailValid.classList.add("d-none")
    

// checking if the email was already used
    for(var i = 0 ; i < usersArray.length ; i++){
        if (usersArray[i].email == newUser.email){
            
            return pEmailUsed.classList.remove("d-none");

        }
        
    }
    pEmailUsed.classList.add("d-none");

    usersArray.push(newUser)
    pSuccess.classList.remove("d-none")
    localStorage.setItem("users",JSON.stringify(usersArray))

    clearInputs()
}


signupButton.addEventListener("click" , signup )

function nameValidation(x){
    var nameRegex = /^\S/
    return nameRegex.test(x.name);


}

function emailValidation(){
    var emailRegex = /[a-z0-9.-_]@[a-z0-9]{2,20}.com$/
    return emailRegex.test(emailInput.value.toLowerCase()) ;

}


function passwordValidation(x){
    var passwordRegex = /^[\S]/
    return passwordRegex.test(x.password);
}


document.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13){
        signup()
    }
})

function clearInputs(){
    
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;

}