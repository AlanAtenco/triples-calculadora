function calculate() {
    const input = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados previos

    // Partir la operación en operadores y operandos
    const parts = input.match(/(\d+|\+|\-|\*|\/)/g); // Agregar '*' y '/'

    if (!parts) {
        resultDiv.innerHTML = '<p>Por favor, ingresa una operación válida.</p>';
        return;
    }

    let currentValue = parseInt(parts[0]); // Valor inicial
    let steps = `<div class="step">Inicio con: ${currentValue}</div>`; // Mostrar valor inicial

    // Recorremos los operadores y operandos
    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const nextValue = parseInt(parts[i + 1]);

        // Realizamos la operación
        if (operator === '+') {
            currentValue += nextValue;
        } else if (operator === '-') {
            currentValue -= nextValue;
        } else if (operator === '*') {
            currentValue *= nextValue; // Multiplicación
        } else if (operator === '/') {
            if (nextValue === 0) {
                resultDiv.innerHTML = '<p>No se puede dividir por cero.</p>';
                return;
            }
            currentValue /= nextValue; // División
        }

        // Mostrar el paso actual
        steps += `<div class="step">${currentValue - (operator === '+' ? nextValue : (operator === '-' ? -nextValue : (operator === '*' ? currentValue / nextValue : currentValue * nextValue)))} ${operator} ${nextValue} = ${currentValue}</div>`;
    }

    // Mostrar resultado final
    resultDiv.innerHTML = steps + `<div class="step final">El resultado es: <strong>${currentValue}</strong></div>`;
}
