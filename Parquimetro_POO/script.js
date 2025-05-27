
class Tarifa {
    constructor(valor, minutos) {
        this.valor = valor;
        this.minutos = minutos;
    }
}

class Parquimetro {
    constructor() {
        // Tarifas Disponíveis
        this.tarifas = [
            new Tarifa(3, 90),
            new Tarifa(1.75, 60),
            new Tarifa(1, 30)
        ];
    }

    // Método para calcular tempo e troco 
    calcular(valorPago) {
        let tempoTotal = 0;
        let restante = valorPago;

        this.tarifas.sort((a, b) => b.valor - a.valor);

        for (let tarifa of this.tarifas) {
            while (restante >= tarifa.valor) {
                restante -= tarifa.valor;
                tempoTotal += tarifa.minutos;
            }
        }

        let troco = restante.toFixed(2);
        let horas = Math.floor(tempoTotal / 60);
        let minutos = tempoTotal % 60;

        return {
            tempoFormatado: `${horas}h ${minutos}min`,
            troco: troco
        };
    }
}

// Instância
const parquimetro = new Parquimetro();

// Seleciona os elementos do HTML
const botao = document.getElementById("btnCalcular");
const inputValor = document.getElementById("valorPago");
const spanTempo = document.getElementById("tempo");
const spanTroco = document.getElementById("troco");

// Click Botao
botao.addEventListener("click", () => {
    const valor = parseFloat(inputValor.value);
    if (isNaN(valor) || valor <= 0) {
        alert("Digite um valor válido para calcular o tempo e o troco.");
        return;
    }

    // Calcular tempo e troco
    const resultado = parquimetro.calcular(valor);

    // Exibe o resultado
    spanTempo.textContent = resultado.tempoFormatado;
    spanTroco.textContent = resultado.troco;
});
