let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        window.alert('tudo ok')
    }else{
        window.alert('Valor invalido ou já encotrado na lista')
    }
}