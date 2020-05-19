import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import DisplayStyles from '../styles/Display';

const Display = props => {
  const { value, operation } = props;

  return (
    <View style={DisplayStyles.display}>
      <Text style={DisplayStyles.displaySymbol}>{operation}</Text>
      <Text style={DisplayStyles.displayValue}>{parseFloat(value)}</Text>
    </View>
  );
};

Display.propTypes = {
  value: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
  operation: null,
};

export default Display;
