// const botao = document.getElementById("botao");
// const inputs = document.getElementsByClassName("input");

// const formulario = document.getElementById("container-cadastro");
// const mensagem = document.getElementById("mensagem");

// // formulario.style.display = "block";
// // mensagem.style.display = "none";

// function mostrarMensagem() {
//     for (let i = 0; i < inputs.length; i++) {
//         let dadoDoUsuario = inputs[i].value;
//         if (dadoDoUsuario === "") {
//             inputs[i].classList.add("campo-obrigatorio");
//             inputs[i].setAttribute("placeholder", "Campo obrigatório");
//             formulario.style.display = "block";
//             mensagem.style.display = "none";
//         } else {
//             inputs[i].classList.remove("campo-obrigatorio");
//             formulario.style.display = "none";
//             mensagem.style.display = "block";
//         }
//     }
// }

// botao.addEventListener("click", function (event) {
//     event.preventDefault();
//     mostrarMensagem();
// });