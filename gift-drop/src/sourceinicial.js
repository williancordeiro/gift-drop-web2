let logo = document.querySelector("#logosite");
logo.addEventListener('click', function () {
    alert("Faça Login para acessar a loja")
})


let paraTelaLogin = document.querySelector("#logar");
paraTelaLogin.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/login-screen.html'
})

let paraTelaCadastro = document.querySelector("#cadastrar");
paraTelaCadastro.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/account-create.html'
})

