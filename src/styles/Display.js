import { StyleSheet } from 'react-native';

const DisplayStyles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
  displaySymbol: {
    borderWidth: 0.5,
    borderColor: 'white',
    width: 60,
    height: 60,
    marginLeft: 10,
    textAlign: 'center',
    paddingBottom: 20,
    margin: 'auto',
    fontSize: 60,
    color: 'white',
  },
});

export default DisplayStyles;
