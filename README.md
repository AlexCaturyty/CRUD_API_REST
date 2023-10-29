# Sistema de Loja - WebApi

## Para iniciar a aplicação execute os seguintes comandos no *Terminal* para entrar na pasta do projeto e instalar os pacotes do node

`
cd/API_Rest`

`npm install
`

## Para rodar a aplicação utilize

`
npm start
`

## Rotas

### Todas as rotas seguem um modelo Padrão

#### Exemplo:

##### GET
`/produto/listar `
#### Resultado esperado: 

`[{"id":1,"nome":"Hamburguer","preco":19.99,"descricao":"Recheado com molhos gostosos","estoque":100},{"id":2,"nome":"Sorvete","preco":19.99,"descricao":"Casquinhas gelados","estoque":100},{"id":3,"nome":"Sanduíche de Frango","preco":6.99,"descricao":"Sanduíche de frango grelhado com alface e maionese","estoque":60},{"id":4,"nome":"Pizza de Pepperoni","preco":9.99,"descricao":"Pizza de pepperoni com molho de tomate e queijo derretido","estoque":40},{"id":5,"nome":"Cachorro-Quente","preco":3.49,"descricao":"Cachorro-quente com salsicha, molho e cebola","estoque":80}]`

##### GET BY ID
` /produto/chave/1 `
#### Resultado esperado: 

`{"id":1,"nome":"Hamburguer","preco":19.99,"descricao":"Recheado com molhos gostosos","estoque":100}`

### Outras rotas:

##### POST
`/produto/criar `

##### PUT
`/produto/editar/chave/1 `

##### DELETE
`/produto/deletar/chave/1 `


