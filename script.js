function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "criancaMenino.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "jovemMenino.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "homemAdulto.jpg")
            } else {
                img.setAttribute("src", "idosoHomem.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "criancaMenina.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "jovemMenina.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "mulherAdulta.jpg")
            } else {
                img.setAttribute("src", "idosaMulher.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}