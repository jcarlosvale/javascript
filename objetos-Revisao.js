//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

//literal
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Joao',
        idade: 30,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        }, 
        {
            nome: 'Ana',
            idade: 50
        }
    ],
    calcularValorSeguro: function() {

    }
}

console.log(carro)

carro.proprietario.endereco.numero = 888
carro['proprietario']['endereco']['logradouro'] = 'Outra rua'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)

//Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)

console.log(p1.getPrecoComDesconto())

//Funcao Factory
function criaFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('Joao', 7980, 4)
const f2 = criaFuncionario('Maria', 1980, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Json Parse
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)
    