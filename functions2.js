//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma funcao arrow 
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(5,3))