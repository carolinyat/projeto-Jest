const divideNumero = require('./divisao');

describe('divideNumero', () => {
    test('Não aceitar divisão por zero', () => {
        expect(() => divideNumero(10, 0).toThrowError('Divisão por zero não é permitida!!!'));
    });

    test('Divisão é aceita', () => {
        expect(divideNumero(10, 5)).toBe(2);
    });
})