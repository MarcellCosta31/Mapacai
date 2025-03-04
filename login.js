function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let emailError = document.getElementById('loginEmailError');
    let passwordError = document.getElementById('loginPasswordError');
    emailError.innerText = passwordError.innerText = "";
    
    if (!email) emailError.innerText = "E-mail é obrigatório";
    if (!password) passwordError.innerText = "Senha é obrigatória";
    
    if (email && password) {
        window.location.href = 'pagina_inicial/pagina_inicial.html';
    }
}

function validateSignup() {
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let nameError = document.getElementById('signupNameError');
    let emailError = document.getElementById('signupEmailError');
    let passwordError = document.getElementById('signupPasswordError');
    nameError.innerText = emailError.innerText = passwordError.innerText = "";
    
    if (!name) nameError.innerText = "Nome é obrigatório";
    if (!email) emailError.innerText = "E-mail é obrigatório";
    if (!password) passwordError.innerText = "Senha é obrigatória";
    
    if (name && email && password) {
        window.location.href = 'pagina_inicial/pagina_inicial.html';
    }
}

function toggleForms() {
    let loginContainer = document.getElementById('loginContainer');
    let signupContainer = document.getElementById('signupContainer');
    loginContainer.classList.toggle('hidden');
    signupContainer.classList.toggle('hidden');
}