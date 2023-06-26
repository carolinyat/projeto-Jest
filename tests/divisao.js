function divideNumero(dividendo, divisor) {
    if (divisor == 0) {
        throw new Error('Divisão por zero não é permitida!!!')
    }

    return dividendo / divisor;
}

module.exports = divideNumero;