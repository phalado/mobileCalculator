import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Display from './Display';

import AppStyle from '../styles/App';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const calculator = calculate(state, buttonName);

    setState(calculator);
  };

  return (
    <View style={AppStyle.container}>
      <Display value={state.total || state.next || '0'} operation={state.operation} />
      <ButtonPanel handleClick={handleClick} />
    </View>
  );
};

export default App;
