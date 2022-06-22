import { isFulfilled } from "q";

export { }

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let somaInput = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo: number = 0;

if (campoSaldo) {
    campoSaldo.innerHTML = saldo.toString();
}

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        somaInput.value = '';
    }
}

function limparCampoSaldo() {
    if (campoSaldo)
        campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    let somar = isNaN(Number(somaInput.value)) == true ? 0 : Number(somaInput.value);
    somarAoSaldo(somar);
});

botaoLimpar?.addEventListener('click', function () {
    limparCampoSaldo();
});