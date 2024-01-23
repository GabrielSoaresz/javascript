function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        do{
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }while(c <= 10)
    }
   
}