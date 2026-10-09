// ===== 1. DADOS =====
const nomeLoja = "Loja do Matheus";
const produtos = [
    { nome: "Notebook", categoria: "Tecnologia", preco: 2000, quantidade: 5, vendidos: 3 },
    { nome: "Celular", categoria: "Tecnologia", preco: 1000, quantidade: 2, vendidos: 1 },
    { nome: "Camisa", categoria: "Roupa", preco: 35, quantidade: 6, vendidos: 5 },
    { nome: "Tênis", categoria: "Roupa", preco: 100, quantidade: 3, vendidos: 3 },
    { nome: "Televisão", categoria: "Tecnologia", preco: 3000, quantidade: 5, vendidos: 4 },
    { nome: "Shorts", categoria: "Roupa", preco: 20, quantidade: 7, vendidos: 1 }
];

// ===== 2. FUNÇÕES =====
function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        const p = lista[i];
        console.log(`${i + 1}. ${p.nome} | ${p.categoria} | R$ ${p.preco} | ${p.quantidade} un. | ${p.vendidos} vendidos`);
    }
}

function formatarNome(texto) {
    const limpo = texto.trim();
    if (limpo.length === 0) return "";
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    lista.push({
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    });
    return lista.length;
}

function calcularValorEstoque(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].preco * lista[i].quantidade;
    }
    return total;
}

function buscarProduto(lista, termo) {
    const termoMinusculo = termo.toLowerCase();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase().includes(termoMinusculo)) {
            return lista[i];
        }
    }
    return null;
}

function produtosEmFalta(lista, minimo) {
    const emFalta = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            emFalta.push(lista[i]);
        }
    }
    return emFalta;
}

function aplicarDesconto(lista, categoria, percentual) {
    let alterados = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria.toLowerCase() === categoria.toLowerCase()) {
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
            alterados++;
        }
    }
    return alterados;
}

function registrarVenda(lista, nome, quantidade) {
    const produto = buscarProduto(lista, nome);
    if (produto === null || produto.quantidade < quantidade) {
        return false;
    }
    produto.quantidade -= quantidade;
    produto.vendidos += quantidade;
    return true;
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

function gerarRelatorio(nome, lista) {
    const totalEstoque = calcularValorEstoque(lista);
    const emFalta = produtosEmFalta(lista, 5);

    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${totalEstoque}`);
    console.log(`Produtos com estoque baixo: ${emFalta.length}`);
    for (let i = 0; i < emFalta.length; i++) {
        console.log(`- ${emFalta[i].nome} (${emFalta[i].quantidade} un.)`);
    }
}

// ===== 3. PROGRAMA PRINCIPAL =====
console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);

console.log("--- Tarefa 3: cadastrar ---");
const novaQuantidade = cadastrarProduto(produtos, "SmartWatch", "Relógios", 300, 4);
console.log(`Produto cadastrado! Agora a loja tem ${novaQuantidade} produtos.`);

console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: R$ ${calcularValorEstoque(produtos)}`);

console.log("--- Tarefa 5: buscar ---");
const encontrado = buscarProduto(produtos, "CAMISA");
if (encontrado !== null) {
    console.log(`Encontrado: ${encontrado.nome} - R$ ${encontrado.preco}`);
} else {
    console.log("Produto não encontrado.");
}
const naoEncontrado = buscarProduto(produtos, "Produto inexistente");
if (naoEncontrado !== null) {
    console.log(`Encontrado: ${naoEncontrado.nome} - R$ ${naoEncontrado.preco}`);
} else {
    console.log("Produto não encontrado.");
}

console.log("--- Tarefa 6: em falta ---");
const emFalta = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${emFalta.length}`);

console.log("--- Tarefa 7: desconto ---");
const descontados = aplicarDesconto(produtos, "Tecnologia", 10);
console.log(`${descontados} produtos receberam desconto.`);
const notebook = buscarProduto(produtos, "Notebook");
console.log(`Novo preço do notebook: R$ ${notebook.preco}`);

console.log("--- Tarefa 8: registrar venda ---");
if (registrarVenda(produtos, "Camisa", 3)) {
    const camisa = buscarProduto(produtos, "Camisa");
    console.log(`Venda realizada! ${camisa.nome}: ${camisa.quantidade} un. em estoque, ${camisa.vendidos} vendidos.`);
}
if (!registrarVenda(produtos, "Camisa", 100)) {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome("   bORRACHA branca  "));

console.log("--- Tarefa 10: JSON ---");
const texto = converterParaJSON(produtos);
console.log(typeof texto);
const recuperados = lerJSON(texto);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);