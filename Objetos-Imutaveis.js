const pessoa = {nome: 'Joao'}
console.log(pessoa)

pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)

delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'MJ'})
