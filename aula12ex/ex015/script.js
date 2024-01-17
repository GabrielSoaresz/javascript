function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(form_ano.value.length == 0 || form_ano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}