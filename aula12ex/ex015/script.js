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
        var img = document.createElement('img') //criando imagem javascript
        img.setAttribute('id', 'foto') // id = 'foto'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','menino.png')
            }else if(idade < 21){
                img.setAttribute('src','jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','homem.png')
            }else{
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','menina.png')
            }else if(idade < 21){
                img.setAttribute('src','jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','mulher.png')
            }else{
                img.setAttribute('src','idosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}