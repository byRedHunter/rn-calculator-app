import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#232323',
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: '#EEEBDD',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeño: {
    fontSize: 25,
    marginBottom: 0,
    color: 'rgba(255, 255, 255, .5)',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
