function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pular = document.getElementById('txtp')
    var res = document.getElementById('res')

    while(inicio <= fim){
        res.innerHTML = inicio
        inicio += pular

    }
}