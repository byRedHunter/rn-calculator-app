import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {styles} from '../theme/appStyle';

const CalculatorScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('800');
  const [numero, setNumero] = useState('100');

  const limpiar = () => setNumero('0');

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.resultado, styles.resultadoPequeño]}>
        {numeroAnterior}
      </Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" bg="#3f2e44" accion={limpiar} />
        <BotonCalc texto="+/-" bg="#3f2e44" accion={limpiar} />
        <BotonCalc texto="del" bg="#3f2e44" accion={limpiar} />
        <BotonCalc texto="/" bg="#610094" accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" bg="#610094" accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" bg="#610094" accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" bg="#610094" accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} doble />
        <BotonCalc texto="." accion={limpiar} />
        <BotonCalc texto="=" bg="#610094" accion={limpiar} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
