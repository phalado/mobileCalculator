import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from './Button';

import ButtonPanelStyles from '../styles/ButtonPanel';

const ButtonPanel = props => {
  const { handleClick } = props;

  const renderButton = (buttonName, color = false, double = false) => (
    <Button
      buttonName={buttonName}
      color={color}
      double={double}
      clickHandler={handleClick}
    />
  );

  return (
    <View>
      <View style={ButtonPanelStyles.panel}>
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷', true)}
      </View>
      <View style={ButtonPanelStyles.panel}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('x', true)}
      </View>
      <View style={ButtonPanelStyles.panel}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-', true)}
      </View>
      <View style={ButtonPanelStyles.panel}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+', true)}
      </View>
      <View style={ButtonPanelStyles.panel}>
        {renderButton('0', false, true)}
        {renderButton('.')}
        {renderButton('=', true)}
      </View>
    </View>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
