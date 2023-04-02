

function calcular() {
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura")
    var vPeso = parseInt(peso.value);
    var v0Altura = parseInt(altura.value);
    var vAltura = v0Altura / 100 
    var res = document.getElementById('res')
    var inf = document.getElementById('inf')
    var valor0 = vPeso / (vAltura * vAltura)
    var valor1 = valor0.toString()
    let valor = valor1.substring(0, 4);

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

alert(`O valor de peso é de ${vPeso}Kg o de altura é de ${vAltura} e a divisão dos dois é de ${valor} e o imc é ${valor}`)
