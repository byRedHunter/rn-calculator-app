import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BotonType {
  texto: string;
  bg?: string;
  doble?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotonCalc = ({
  texto,
  bg = '#374045',
  doble = false,
  accion,
}: BotonType) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={[
          styles.boton,
          {backgroundColor: bg},
          doble && styles.botonDoble,
        ]}>
        <Text style={styles.botonTexto}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;

const styles = StyleSheet.create({
  boton: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#374045',
  },
  botonDoble: {
    width: 160,
  },
  botonTexto: {
    fontSize: 30,
    color: '#EEEBDD',
    fontWeight: '300',
  },
});
