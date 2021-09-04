
Nome Projeto: 

CamelliaBrasil

 

Tema:

Aplicação de API que tem por objetivo simular a manipulação dos itens que a loja possui em estoque. Sendo possível adicionar, editar, excluir e ver todas as peças e categorias. 

Rotas/EndPoints
GET/clothes/
Rota que retorna todos os itens da loja
HTTP 200 OK

GET/:id/
Rota que retorna os detalhes sobre um item baseado no seu id.
HTTP 200 OK
 
POST/newClothing
/
Rota que recebe um novo item, adiciona ele no estoque e retorna o item criado.
HTTP 201 CREATED
 
PUT/:id/
Rota que atualiza o valor do item e retorna atualizado..
HTTP 200 OK
 
DELETE/:id/
Rota que deleta um item baseado no id.
HTTP 204 NO CONTENT




**Requisitos** 

 [n precisa] "/clothing/vestido" Deverá retornar todas as roupas da categoria vestido

 [n precisa] "/clothing/blusa" Deverá retornar todas as roupas da categoria blusa

 [n precisa] "/clothing/calca" Deverá retornar todas as roupas sa categoria calça

 [x] "/:categoria" Deverá retornar todas as roupas de uma categoria específica

 [x] "/category" Deverá retornar todas as categorias cadastradas

 [x] "/clothing" Deverá retornar todas as roupas cadastradas

 [x] "/category" Deverá criar uma categoria

 [x] "/clothing" Deverá criar uma roupa

 [] "/clothing/[ID]" Deverá deletar roupa por id específico e retornar mensagem amigável

 [x] "/category/[ID]" Deverá deletar categoria por id específico e retornar mensagem amigável

 [] "/clothing/[ID]" Deverá alterar informação específica dentro de uma roupa por id específico e retornar a roupa alterada

 [x] "/category/[ID]" Deverá alterar informação específica dentro de uma categoria por id específico e retornar a categoria alterada

[rever] "/clothing/[ID]" Deverá retornar a roupa por id específico

[x] "/category/[ID]" Deverá retornar a categoria por id específico

**Regras de negócio**
 [x]Não deverá ser possível criar categoria com o mesmo nome.
 [x]Não deverá ser possível criar roupa com o mesmo nome.
 [] O tamanho da roupa deverá ser adicionado no título do item.

 **Dados para Collection Categoria**
- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

**Dados para Collection Roupas**
- id: autogerado e obrigatório
- nome: texto e obrigatório
- preço: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- categoria: texto e obrigatório obrigatório