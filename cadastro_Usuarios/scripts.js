function salvarCampo(id) {
    const campo = document.getElementById(id);
    if (campo) {
        localStorage.setItem(id, campo.value);
    }
}


//1. Ouvir o evento de quando sair do campo CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2. Validar o CEP
    if (!(cepInformado.length === 8)) {
        alert("Digite um CEP válido com 8 dígitos numéricos.");
        return;
    }


    //3. Fazer busca no ViaCEP
    //3.1 Promise de que o Fetch vai buscar esse recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            //3.2 Processamento da Página
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro || "";
                document.getElementById("bairro").value = data.bairro || "";
                document.getElementById("cidade").value = data.localidade || "";
                document.getElementById("estado").value = data.uf || "";

                ["logradouro", "bairro", "cidade", "estado"].forEach(salvarCampo);
            } else {
                alert("CEP não encontrado.")
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error))
})


// selecionar todos os inputs
const inputs = document.querySelectorAll("input");

// Adicionar evento para cada input para salvar no localstorage
inputs.forEach(input => {
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    })
})


document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach(input => {
        const valorSalvo = localStorage.getItem(input.id);
        if (valorSalvo) {
            input.value = valorSalvo;
        }
    })
})

