const botao = document.getElementById("botao");
const inputs = document.getElementsByClassName("input");

const containerCadastro = document.getElementById("container-cadastro");
const containerCadastrado = document.getElementById("container-cadastrado");

const formulario = document.querySelectorAll(".mostrar");
const novoUsuario = document.querySelectorAll(".esconder");

containerCadastro.style.display = "block";
containerCadastrado.style.display = "none";

function cadastro() {
    debugger;
    for (let i = 0; i < inputs.length; i++) {
        let dadoDoUsuario = inputs[i].value;
        if (dadoDoUsuario === "") {
            inputs[i].classList.add("campo-obrigatorio");
            inputs[i].setAttribute("placeholder", "Campo obrigatório")
            containerCadastrado.style.display = "none";
            containerCadastro.style.display = "block";
        } else {
            inputs[i].classList.remove("campo-obrigatorio");
            containerCadastro.style.display = "none";
            containerCadastrado.style.display = "block";
        }
    }
}

botao.addEventListener("click", function (event) {
    event.preventDefault();
    cadastro();
});
