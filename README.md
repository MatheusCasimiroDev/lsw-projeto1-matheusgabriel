# lsw-projeto1-matheusgabriel
# Minha Loja - Loja do Matheus

Aluno(a): Matheus Gabriel Casimiro Do Nascimento - 202612010006

Como executar: node loja.js

Funcionalidades:
listarProdutos(produtos)

Percorre a lista e exibe cada produto com número, nome, categoria, preço, quantidade em estoque e unidades vendidas.
cadastrarProduto(lista, nome, categoria, preco, quantidade)

Cria um produto com os dados informados, formata o nome com formatarNome e adiciona o novo produto à lista. O campo vendido começa em 0.
valorEstoque(produtos)

Calcula o valor total do estoque multiplicando o preço pela quantidade de cada produto e somando os resultados.
buscarProduto(produtos, nome)

Procura um produto pelo nome, sem diferenciar letras maiúsculas de minúsculas. Exibe uma mensagem com o resultado.
produtosEmFalta(produtos, minimo)

Seleciona os produtos cuja quantidade em estoque é menor que o limite informado.
aplicarDesconto(produtos, categoria, percentual)

Aplica o percentual de desconto ao preço de cada produto da categoria indicada. A comparação de categoria não diferencia maiúsculas de minúsculas.
registrarVenda(produtos, nome, quantidade)

Procura o produto pelo nome e verifica se existe estoque suficiente. Se a venda for possível, reduz a quantidade em estoque e aumenta o total vendido.
formatarNome(termo)

Remove espaços no início e no fim do texto, transforma a primeira letra em maiúscula e as letras restantes em minúsculas.
converterParaJSON(produtos)

Converte a lista de produtos para uma representação em texto JSON.
lerJSON(produtos)

Interpreta o texto JSON e reconstrói o valor JavaScript correspondente.
gerarRelatorio(nome, produtos)

Exibe um resumo da loja com nome em maiúsculas, quantidade de produtos, valor total do estoque e lista de produtos com menos de 5 unidades. Reutiliza valorEstoque e produtosEmFalta.
