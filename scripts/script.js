var body = document.getElementById("body")
var textoMostrarOcutar = document.getElementById("textoMostrarOcutar")
var footer = document.getElementById("footer")
var mode = document.getElementById("mode-icon")
var body = document.getElementById("body")
var container = document.getElementById("container")
var footer = document.getElementById("footer")
var styleLight = document.getElementById("styleLight")
var style = document.getElementById("style")

function lightDarkMode() {
    if (mode.classList.contains('fa-sun')) {

        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')

        styleLight.innerHTML = '<link rel="stylesheet" href="styles/style.css">'
        style.innerHTML = '<link rel="stylesheet" href="styles/style-light.css"></link>'

    } else if (mode.classList.contains('fa-moon')) {

        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        styleLight.innerHTML = '<link rel="stylesheet" href="styles/style-light.css"></link>'
        style.innerHTML = '<link rel="stylesheet" href="styles/style.css">'
    }
}

function mostrarOcutar() {
    var containerTabela = document.getElementById("containerTabela")
    var mostrarOcutar = document.getElementById("mostrarOcutar")

    if (mostrarOcutar.classList.contains("ativo")) {

        containerTabela.style.display = "block"
        textoMostrarOcutar.innerHTML = "Ocultar Tabela do IMC"
        mostrarOcutar.classList.remove("ativo")
        mostrarOcutar.classList.add("desativo")
        body.style.height = "1000px"
        footer.style.marginTop = "986px"

    } else if (mostrarOcutar.classList.contains("desativo")) {

        containerTabela.style.display = "none"
        textoMostrarOcutar.innerHTML = "Mostra Tabela do IMC"
        mostrarOcutar.classList.remove("desativo")
        mostrarOcutar.classList.add("ativo")
        body.style.height = "650px"
        footer.style.marginTop = "625px"
    }
}

function calcular() {
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura")
    var vPeso = parseInt(peso.value);
    var v0Altura = parseInt(altura.value);
    var vAltura = v0Altura / 100 
    var res = document.getElementById("res")
    var inf = document.getElementById("inf")
    var valor0 = vPeso / (vAltura * vAltura)
    var valor1 = valor0.toString()
    var valor = valor1.substring(0, 4);

    res.innerHTML = `IMC: ${valor}`
    
    if (valor0 < 18.5) {

        inf.innerHTML = `Abaixo do Peso`
        inf.style.color = 'yellow'
        inf.style.fontSize = '15px'

    } else if (valor0 >= 18.5 && valor0 < 25) {

        inf.innerHTML = `Normal`
        inf.style.color = 'green'
        inf.style.fontSize = '15px'

    } else if (valor0 >= 25 && valor0 < 30) {

        inf.innerHTML = `Sobre Peso`
        inf.style.color = 'orange'
        inf.style.fontSize = '15px'

    } else if (valor0 >= 30 && valor0 < 35) {

        inf.innerHTML = `Obesidade Grau 1`
        inf.style.color = 'red'
        inf.style.fontSize = '15px'

    } else if (valor0 >= 35 && valor0 < 40) {

        inf.innerHTML = `Obesidade Grau 2`
        inf.style.color = 'red'
        inf.style.fontSize = '15px'

    } else if (valor0 > 40) {

        inf.innerHTML = `Obesidade Grau 3`
        inf.style.color = 'red'
        inf.style.fontSize = '15px'

    }
}