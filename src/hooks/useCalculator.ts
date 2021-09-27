import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const useCalculator = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // no acceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // si hay otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        // si es diferente de cero y no hay un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // evitar el 00000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (numero.length === 1) {
      setNumero('0');
    } else if (numero.length === 2 && numero.startsWith('-')) {
      setNumero('0');
    } else {
      const newNumero = numero.substring(0, numero.length - 1);

      setNumero(newNumero);
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    }

    setNumeroAnterior(numero);
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcularTotal = () => {
    console.log(ultimaOperacion.current);
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if (num2 === 0 && num1 === 0) {
      return limpiar();
    }

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num2 + num1}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num2 * num1}`);
        break;

      case Operadores.dividir:
        const result = num2 / num1;

        if (!isFinite(result)) {
          return setNumero('Error');
        }

        setNumero(`${result}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    calcularTotal,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    armarNumero,
  };
};

export default useCalculator;
