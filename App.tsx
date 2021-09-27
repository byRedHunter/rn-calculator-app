import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme/appStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="#232323" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
