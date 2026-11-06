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
//aqui eu declarei os produtos normal usando const


// ===== 2. FUNÇÕES =====
function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        const p = lista[i];
        console.log(`${i + 1}. ${p.nome} | ${p.categoria} | R$ ${p.preco} | ${p.quantidade} un. | ${p.vendidos} vendidos`);
    }   
    //usei for de comando de repetição porque ja sabia a quantidade (que são os produtos da lista) e usei console log pra printar os  produtos da lista
    // cada sifrao desse identifica cada categoria
}

function formatarNome(texto) {
    const limpo = texto.trim();
    if (limpo.length === 0) return "";
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
    //remove espaços extras das pontas e deixa apenas a primeira letra maiúscula e o restante minúsculo. Retorna texto vazio se não houver conteúdo
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
    // a funcao push empurra um item pra ultima posicao de um vetor que é a lista.
}

function calcularValorEstoque(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].preco * lista[i].quantidade;
    }
    //declara o total = 0 e vai adicionando o valor de cada produto em estoque
    return total;
}

function buscarProduto(lista, termo) {
    const termoMinusculo = termo.toLowerCase();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase().includes(termoMinusculo)) {
            return lista[i];
        }
    }
    //Procura o primeiro produto em uma lista cujo nome contenha o termo pesquisado sem diferenciar maiúsculas de minúsculas. Retorna o objeto encontrado ou null.
    return null;
}

function produtosEmFalta(lista, minimo) {
    const emFalta = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            emFalta.push(lista[i]);
        }
    }
    //Filtra e retorna uma lista com os produtos cuja quantidade em estoque é menor que o valor mínimo especificado.
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
    //Aplica o desconto percentual no preço de todos os produtos de uma categoria específica. Retorna a quantidade de itens alterados.
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
    //essa funcao valida o estoque e conclui a venda. O buscarProduto acha o item na lista, o if interrompe a execução retornando falso se faltar estoque, os operadores -= e += atualizam os totais e o `return true` confirma que deu certo.
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
    //converte pra json oxe
    //converte o array lista pra json no caso ne
}


function lerJSON(texto) {
    return JSON.parse(texto);
    //converte o array de json pra js denovo!!
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
    //esse codigo gera um relatorio no console as consts chamam as funcoes para calcular o estoque e achar itens baixos o console.log imprime as informacoes formatadas o nome.toUpperCase deixa o titulo maiusculo o lista.length conta o total o emFalta.length conta os em falta e o for percorre a lista para listar cada item critico !!1
}

// ===== 3. PROGRAMA PRINCIPAL =====
//esse codigo testa todo o sistema o console.log exibe cada etapa na tela as consts guardam o retorno de funcoes como cadastrar buscar e converter dados os ifs tratam buscas e vendas checando se deram certo e o typeof verifica o tipo de dado para confirmar que o json virou texto, depois daqui ja era vapo!
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