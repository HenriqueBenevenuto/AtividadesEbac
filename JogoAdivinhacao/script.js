let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes;

function definirDificuldade(tentativas) {
    tentativasRestantes = tentativas;
    document.getElementById("overlay").style.display = "none"; // Fecha o overlay
    document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

function pegaPalpite() {
    const chute = parseInt(document.getElementById("valor").value);

    if (isNaN(chute) || chute < 1 || chute > 100) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido entre 1 e 100!";
        return;
    }

    for (let i = 0; i < 1; i++) {
        if (tentativasRestantes > 0) {
            if (chute === numeroAleatorio) {
                document.getElementById("resultado").textContent = `Parabéns, você acertou! O número era ${numeroAleatorio}.`;
            } else if (chute < numeroAleatorio) {
                document.getElementById("resultado").textContent = `Palpite errado! O número é maior que ${chute}.`;
            } else {
                document.getElementById("resultado").textContent = `Palpite errado! O número é menor que ${chute}.`;
            }

            tentativasRestantes--;
            document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;

            if (tentativasRestantes === 0 && chute !== numeroAleatorio) {
                document.getElementById("resultado").textContent = `Você perdeu! O número era ${numeroAleatorio}.`;
            }
        } else {
            document.getElementById("resultado").textContent = `Fim de jogo! O número era ${numeroAleatorio}.`;
        }
    }


    document.getElementById("valor").value = ""; // Limpa o campo
}
