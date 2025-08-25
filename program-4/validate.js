function validateName(name){
    const regex = /^[A-Za-z\s]+$/;
    if(name.trim() === ""){
        return "Name cannot be empty";
    }
    if(!regex.test(name)){
        return "Name can only contain letters and spaces";
    }
    return ""; // No error
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === ""){
        return "Email cannot be empty";
    }
    if(!regex.test(email)){
        return "Invalid Email format";
    }
    return "";
}

function validatePassword(password){
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim() === ""){
        return "Password cannot be empty";
    }
    if(!regex.test(password)){
        return "Password must be at least 8 characters long, contain an uppercase letter, and a number";
    }
    return "";
}

function validatePhone(phone){
    const regex = /^[0-9]{10}$/;
    if(phone.trim() === ""){
        return "Phone Number cannot be empty";
    }
    if(!regex.test(phone)){
        return "Phone number must be exactly 10 digits";
    }
    return "";
}

function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const phoneError = validatePhone(phone);

    document.getElementById("nameError").innerText = nameError;
    document.getElementById("emailError").innerText = emailError;
    document.getElementById("passwordError").innerText = passwordError;
    document.getElementById("phoneError").innerText = phoneError;

    return !(nameError || emailError || passwordError || phoneError);
}
