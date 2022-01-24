const prod1 = {}
prod1.nome = "teste"
prod1.preco = 10.02
prod1['Desconto legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'some name',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blablabla: 3
        }
    }
}

console.log(prod2)