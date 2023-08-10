function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;
    if(chuteForInvalido(numero)) {

        elementoChute.innerHTML += `<div>Valor inválido, não é um numero.</div>`;
        return;
    }

    if (numeroForMaiorOuMenoQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>O número está fora do intervalo permitido: o número deve ser maior ou igual a ${menorValor} e menor ou igual a ${maiorValor}.</div>`;
        return;
    }

    if(numero == numeroSecreto){
        document.body.innerHTML = `
    <h1>Parabéns, você acertou!</h1>
    <h3>O número secreto é ${numeroSecreto}</h3>
    <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
     `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenoQueOValorPermitido(numero){
    return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
