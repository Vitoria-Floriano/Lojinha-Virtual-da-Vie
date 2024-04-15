const produtosCarrinho = localStorage.getItem('produtos')
const listaDeProdutos = document.querySelector('main')
const carrinhoJSON = JSON.parse(produtosCarrinho);

carrinhoJSON.forEach(produto => {
    const div = document.createElement('div')
    div.innerHTML = `
      <h23>${produto.nome}</h3>
      <img src="${produto.imagem}" alt="${produto.nome}"/>
    `
    listaDeProdutos.appendChild(div)
});