function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    if (name == "") {
        alert("please enter your name");
        return false;
    }
    else if (email == "") {
        alert("please enter your email");
        document.getElementById('email').focus();
        return false;
    }
    else if (pass == "") {
        alert("Please enter your pass");
        document.getElementById('pass').focus();
        return false;
    }
    else if (!(pass.match(/[!@#-+]/))) {
        alert("weak password!!");
        document.getElementById('pass').value;
        return false;
    }
    else if (cpass == "") {
        alert("please enter your conform pass");
        document.getElementById('cpass').focus();
        return false;
    }
    else if (pass != cpass) {
        alert("incorrect pass!!!");
        document.getElementById('cpass').focus();
        return false;
    }
    alert("you're registered Successfully!!");
};




function valid() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "") {
        alert("Please enter your username!!");
        document.getElementById('username').focus();
        return false;
    }
    else if (password == "") {
        alert("Please enter your Password!!");
        document.getElementById('password').focus();
        return false;
    }
    alert("You're Login Successfully!!");

}
