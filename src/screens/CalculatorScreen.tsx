import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import useCalculator from '../hooks/useCalculator';
import {styles} from '../theme/appStyle';

const CalculatorScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    calcularTotal,
    btnDelete,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    armarNumero,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {numeroAnterior !== '0' && (
        <Text style={[styles.resultado, styles.resultadoPequeño]}>
          {numeroAnterior}
        </Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" bg="#3f2e44" accion={limpiar} />
        <BotonCalc texto="+/-" bg="#3f2e44" accion={positivoNegativo} />
        <BotonCalc texto="del" bg="#3f2e44" accion={btnDelete} />
        <BotonCalc texto="/" bg="#610094" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" bg="#610094" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" bg="#610094" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" bg="#610094" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} doble />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" bg="#610094" accion={calcularTotal} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
