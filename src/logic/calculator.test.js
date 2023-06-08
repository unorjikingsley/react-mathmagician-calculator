import calculate from './calculator';

describe('testing calculators functionalities', () => {
  test('All clear button returns nothing/null', () => {
    const operands = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonSelected = 'AC';
    expect(calculate(operands, buttonSelected)).toStrictEqual(operands);
  });

  test('Zero to input returns {}', () => {
    const operands = {
      total: '0',
      next: '0',
      operation: null,
    };

    const buttonSelected = '0';

    expect(calculate(operands, buttonSelected)).toStrictEqual({});
  });

  test('test +/- button', () => {
    const operands = {
      total: 0,
      next: 100,
      operation: null,
    };

    const buttonSelected = '+/-';
    expect(calculate(operands, buttonSelected)).toStrictEqual({
      total: 0,
      next: '-100',
      operation: null,
    });
  });

  test('Addition operator', () => {
    const operands = {
      total: 75,
      next: 25,
      operation: '+',
    };

    const buttonSelected = '+';
    expect(calculate(operands, buttonSelected)).toStrictEqual({
      total: '100',
      next: null,
      operation: '+',
    });
  });

  test('Minus operator', () => {
    const operands = {
      total: 100,
      next: 25,
      operation: '-',
    };

    const buttonSelected = '-';
    expect(calculate(operands, buttonSelected)).toStrictEqual({
      total: '75',
      next: null,
      operation: '-',
    });
  });

  test('multiplication operator', () => {
    const operands = {
      total: 10,
      next: 10,
      operation: 'x',
    };

    const buttonSelected = 'x';
    expect(calculate(operands, buttonSelected)).toStrictEqual({
      total: '100',
      next: null,
      operation: 'x',
    });
  });

  test('division opearator', () => {
    const operands = {
      total: 15,
      next: 5,
      operation: '÷',
    };

    const buttonSelected = '÷';
    expect(calculate(operands, buttonSelected)).toStrictEqual({
      total: '3',
      next: null,
      operation: '÷',
    });
  });
});
