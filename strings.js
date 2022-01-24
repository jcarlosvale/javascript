const escola = "codere"

console.log(escola.charAt(2))
console.log(escola.charCodeAt(4)) //ASCII
console.log(escola.concat(" teste"))
console.log(escola.replace('e', 'F'))
console.log('teste;outro;nome'.split(';'))


const nome = 'joao carlos'
const template = `Ola ${nome}, tudo bem?`
console.log(template)

const upper = s => s.toUpperCase()
console.log(`Teste = ${upper("teste")}`)

const array = [1.1, 2, "teste"]
console.log(array)
console.log(array.length)

array[4] = false
console.log(array)

array.push(5, 6)
console.log(array)

delete array[6]
console.log(array)
array[6] = 10
console.log(array.pop())
