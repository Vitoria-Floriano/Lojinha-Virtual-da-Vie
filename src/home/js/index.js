const carrinho = []
const botoes = document.querySelectorAll('button');
const produtos = document.querySelectorAll('.produto');
// const botaoCarrinho = document.querySelector('botoes');
console.log(produtos);
console.log(botoes);


function salvar(){
    localStorage.setItem('produtos', JSON.stringify(carrinho))
}

botoes.forEach((botao, index) =>{
    botao.addEventListener('click', () => {
        const produto = produtos[index];
        const idProduto = produtos[index].getAttribute("id");
        const nome = produto.querySelector('h3').textContent;
        const imagem = produto.querySelector('img').src;
        const adicionadoCarrinho = carrinho.find(item => item.idProduto === idProduto);

        if(!adicionadoCarrinho){
            carrinho.push({
                idProduto,
                nome,
                imagem
            })
            salvar();
        }
    })
})
