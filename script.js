// Seleciona o botão "Calcular" e adiciona um evento de clique
document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtém os valores dos dois campos de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verifica se os campos de entrada têm valores válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira dois números válidos.');
        return;
    }

    // Calcula a soma dos dois números
    const soma = numero1 + numero2;

    // Exibe o resultado em um alert
    alert('A soma é: ' + soma);
});
