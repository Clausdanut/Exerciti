//FORMULAR EXEMPLU
const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordError = document.querySelector(".pass-err");
const usernameError = document.querySelector(".user-err");

form.addEventListener('submit', e => {
    if(username.value.length < 6){
        e.preventDefault();
        usernameError.innerHTML="Numele trebuie sa contina mai mult de 6 litere";
    }

    if(password.value.length < 8){
        e.preventDefault();
        passwordError.innerHTML = "Parola tre sa aiba macar 8"
    }

    let date = [username.value,password.value,email.value];
    e.preventDefault();
    console.log(date);
});


