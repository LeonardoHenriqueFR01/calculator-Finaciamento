function calcular(event) {
    event.preventDefault();  // Impede o envio do formulário

    const form = document.getElementById('form')
    const resul = document.getElementById('resul')
    const value_car = parseFloat(document.getElementById('financiamento').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100; // Convertendo para decimal
    const resultadosDiv = document.getElementById('resultados');  // Div onde vamos colocar os resultados

    if (isNaN(value_car) || value_car <= 0 || isNaN(juros) || juros < 0) {
        resultadosDiv.innerHTML = "<p>Por favor, insira valores válidos.</p>";
        return;
    }

    form.style.display = 'none'
    resul.style.display = 'flex'

    // Meses fixos que você quer calcular
    const mesesArray = [12, 24, 36, 48, 60];
    let resultHTML = "";  // Usado para armazenar o conteúdo HTML dos resultados

    // Calcula os resultados para os meses fixos (12x, 24x, 36x, 48x e 60x)
    mesesArray.forEach(m => {
        const parcela = (value_car * juros) / (1 - Math.pow(1 + juros, -m));
        const valorTotal = parcela * m;
        const jurosTotal = valorTotal - value_car;

        resultHTML += `
            <div class="resultado-item">
                <p><strong>Parcelas em ${m}x:</strong></p>
                <p>Valor da Parcela: R$ ${parcela.toFixed(2)}</p>
                <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
                <p>Juros Total: R$ ${jurosTotal.toFixed(2)}</p>
                <hr>
            </div>
        `;
    });

    // Exibe os resultados na div 'resultados'
    resultadosDiv.innerHTML = resultHTML;
}

function voltar() {
    const form = document.getElementById('form')
    const resul = document.getElementById('resul')
    
    
    resul.style.display = 'none'
    form.style.display = 'block'
}