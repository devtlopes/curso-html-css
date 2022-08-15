function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'criancamasc.png')
            }else if(idade < 21){
                // Adolescente
                img.setAttribute('src', 'garotoadolescente.png')
            }else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png')
            }else {
                // Idoso
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criancafem.png')
            }else if(idade < 21){
                // Adolescente
                img.setAttribute('src', 'garotaadolescente.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero +  ' com ' +  idade +  ' anos.'
        res.appendChild(img)
    }
}