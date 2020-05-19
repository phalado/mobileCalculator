import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import DisplayStyles from '../styles/Display';

const Display = props => {
  const { value, operation } = props;

  return (
    <View style={DisplayStyles.display}>
      <View style={DisplayStyles.displaySymbol}>
        <Text style={DisplayStyles.displaySymbolText}>{operation}</Text>
      </View>
      <View style={DisplayStyles.displayValueContainer}>
        <Text style={DisplayStyles.displayValue}>{parseFloat(value)}</Text>
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
