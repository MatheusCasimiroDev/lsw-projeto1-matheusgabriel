const nomeLoja = "Loja do Matheus";
const produtos = [
    {nome: "Notebook", categoria: "Tecnologia", preco: 2000, quantidade: 5, vendidos: 3},
    {nome: "Celular", categoria: "Tecnologia", preco: 1000, quantidade: 2, vendidos: 1 },
    {nome: "Camisa", categoria: "Roupa", preco: 35, quantidade: 6, vendidos: 5},
    {nome: "Tenis", categoria: "Roupa", preco: 100, quantidade: 3, vendidos: 3},
    {nome: "Televisao", categoria: "Tecnologia", preco: 3000, quantidade: 5, vendidos: 4},
    {nome: "Shorts", categoria: "Roupa", preco: 20, quantidade: 7, vendidos: 1},
]

function listarprodutos(produtos){
    let k = 1;
    produtos.forEach(produtos => {
        console.log( k +  " " + produtos.nome + " | " + produtos.categoria + " | R$: " + produtos.preco + " | Quantidade: " + produtos.quantidade + " | Vendidos: " + produtos.vendidos + " | " + "\n" );
        k++
    });
}

function cadastrarproduto(produtos, nome, categoria, preco, quantidade){
    produtos.push(nome: "nome", categoria: "categoria", preco= preco, quantidade= quantidade, vendidos = 0);
    console.log("Produto cadastrado! Agora a loja tem " + produtos.length + " produtos!");
}

function calcularvalorestoque(produtos){
    let somaestoque = 0;
    produtos.forEach(produtos=> {
     somaestoque= somaestoque + (preco * quantidade);
    })
    return somaestoque;
}

function
