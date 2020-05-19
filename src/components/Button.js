import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';

import ButtonStyles from '../styles/Button';

const Button = props => {
  const {
    buttonName, color, double, clickHandler,
  } = props;

  const stylesButton = [ButtonStyles.button];
  if (double) stylesButton.push(ButtonStyles.buttonDouble);
  if (color) stylesButton.push(ButtonStyles.operationButton);

  return (
    <TouchableHighlight onPress={() => clickHandler(buttonName)}>
      <Text style={stylesButton}>{buttonName}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  double: PropTypes.bool,
  color: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  double: false,
  color: false,
};

export default Button;
