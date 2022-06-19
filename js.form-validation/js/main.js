function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
function hasNumber(myString) {
    return /\d/.test(myString);
}
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

let submit = document.getElementById('submit')
submit.onclick = function() {
    let h1 = document.getElementById('h1');
    let username = document.getElementById('user').value;
    let email=document.getElementById("email");
    let password=document.getElementById("password").value;
    let first=username.charAt(0);
    if((!isUpper(first))||(username.length<4)||(username=='')){
        h1.innerHTML = "Username is wrong"
        return false;
    }

    if((!isLetter(password)) && (!hasNumber(password))){
        h1.innerHTML = "Password is wrong"
        return false;
    }
    if((!containsSpecialChars(password))){
        h1.innerHTML = "Password is wrong"
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    else{
        h1.innerHTML = "Email is wrong"
        return (false)
    }
}
document.getElementById('icon').onclick = function() {
    var input = document.getElementById('password')
    var icon = document.getElementById('icon')
    if(input.type === "password"){
        input.type = "text"
        icon.className = "fa-solid fa-eye-slash"
    }
    else{
        input.type = "password"
        icon.className = "fa-solid fa-eye"
    }
}


