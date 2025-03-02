function validacaoForm(){
    const email = document.getElementById("email").valeu;
    if (!email){
        document.getElementById("recuperar-senha").disabled = true;
    }
}
