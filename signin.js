console.log("in signin.js");

const signinBtn = document.getElementById("#signin-btn"); 
const pwdBox = document.getElementById("#pwd-box"); 
const hardCodePwd = 'lasagna';

// demo thing 
// const inputBoxes = document.getElementById('input-boxes');

signinBtn.addEventListener("click", () => { 

    console.log("pwd value: ", pwdBox.value);

    const userPwd = pwdBox.value;


    if(userPwd === hardCodePwd) {
        console.log("Signed in");
        sessionStorage.setItem("signedIn", "true");
        window.location.href = "private.html";
    }
    else {
        console.log("Not signed in");
        document.querySelector("#message").textContent = "Nope. Try again.";
        pwdBox.value = "";
    }


})