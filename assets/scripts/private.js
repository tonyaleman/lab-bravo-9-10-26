console.log("in private.js");

const signedIn = sessionStorage.getItem("signedIn");

if(signedIn === "true") {
    console.log("yes signed in");
}
else{
    console.log("no, not signed in");
    window.location.href = "signin.html";
}

