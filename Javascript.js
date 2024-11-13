function consultarCEP() {
    const cep = document.getElementById("cep").value;
    const result = document.getElementById("result");

    // Limpa o resultado antes de uma nova busca
    result.innerHTML = "";

    // Valida o formato do CEP
    if (!/^[0-9]{8}$/.test(cep)) {
        result.innerHTML = '<span class="error">Por favor, insira um CEP válido com 8 dígitos.</span>';
        return;
    }

    // Faz a requisição à API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao consultar o CEP.");
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                result.innerHTML = '<span class="error">CEP não encontrado.</span>';
            } else {
                // Exibe os dados do endereço
                result.innerHTML = `
                    <strong>Endereço:</strong> ${data.logradouro || "Não disponível"}<br>
                    <strong>Bairro:</strong> ${data.bairro || "Não disponível"}<br>
                    <strong>Cidade:</strong> ${data.localidade || "Não disponível"}<br>
                    <strong>Estado:</strong> ${data.uf || "Não disponível"}
                `;
            }
        })
        .catch(error => {
            result.innerHTML = `<span class="error">Erro ao buscar o CEP: ${error.message}</span>`;
        });
}
