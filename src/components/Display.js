import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import DisplayStyles from '../styles/Display';

const Display = props => {
  const { value, operation } = props;

  const getValue = value => {
    if (parseFloat(value) >= 1000000000) {
      return parseFloat(value).toExponential(6);
    }

    return parseFloat(value);
  };

  return (
    <View style={DisplayStyles.display}>
      <View style={DisplayStyles.displaySymbol}>
        <Text style={DisplayStyles.displaySymbolText}>{operation}</Text>
      </View>
      <View style={DisplayStyles.displayValueContainer}>
        <Text style={DisplayStyles.displayValue}>{getValue(value)}</Text>
      </View>
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
