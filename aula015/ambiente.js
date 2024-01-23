let num = [5, 8, 9, 100, 35, 2]
num.sort() //Só funciona para strings, para numeros precisa fornecer uma função
console.log(`${num} Os números NÃO estão em ordem crescente`)
console.log(`O vetor tem ${num.length} posições`) //Conta quantos elementos tem dentro da lista

console.log('---------------------------------------------------------------------')

num[6] = 7 //Acrescenta valor no indice escolhido
num.push(22) //Acrescenta o valor ao final da lista

console.log('Acrescentando os valores 7 e 22 por metodos diferentes')
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)

console.log('---------------------------------------------------------------------')

num.sort(function(a,b){return a - b})
console.log(`${num} Os números estão em ordem crescente`)

for( let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('---------------------------------------------------------------------')

console.log('Simplificando o código acima')
for(let pos in num){
    console.log(num[pos])
}


let pos = num.indexOf(22) //Procura a posição em que o valor está

if(pos == -1){
    console.log('O valor não foi encontrado') //Quando o valor não está na lista, o sistema retorna -1
}else{
    console.log('O valor está na posição: ' + pos)
}

