const maiorValor = 1000;
const menorValor = 1;

const elementMenorValor = document.getElementById('menor-valor');
elementMenorValor.innerHTML = menorValor;

const elementMaiorValor = document.getElementById('maior-valor');
elementMaiorValor.innerHTML = maiorValor;
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + menorValor);
}

const  numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto)


