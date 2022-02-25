const ferrariOld = {
    modelo: 'F40',
    velMax: 324
}

console.log(ferrariOld.__proto__)
console.log(ferrariOld.__proto__ === Object.prototype)

//CADEIA DE PROTOTIPOS
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2 : 'B'}
const filho = {__proto__: pai, attr3 : 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3)

//CRIANDO PROTOTIPOS DIFERENTEMENTE
const carro = {
    velAtual : 0,
    velMax : 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax : 324
}

const volvo = {
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())