function compareLogin(event){
    event.preventDefault();

    const USERNAME = "Fernandez";
    const PASSWORD = "1234";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage").value;
    if(userName === USERNAME && passWord === PASSWORD){
        alert("Logging in");
        window.location.href = "message.html";
    }else{
        alert("Incorrect");
        errorMessage.textContent = "Invalid Username or Password!";

    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);