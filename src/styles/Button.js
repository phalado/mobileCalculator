import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: (Dimensions.get('window').width - 10) / 4,
    width: (Dimensions.get('window').width - 10) / 4,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: ((Dimensions.get('window').width - 10) / 4) * 2,
  },
});

export default ButtonStyles;
