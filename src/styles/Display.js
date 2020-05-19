import { StyleSheet } from 'react-native';

const DisplayStyles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(190,190,190,0.6)',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 5,
  },
  displayValueContainer: {
    width: '80%',
    marginLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  displayValue: {
    fontFamily: 'Digital-7',
    fontSize: 40,
    color: '#fff',
  },
  displaySymbol: {
    borderWidth: 0.5,
    borderColor: 'white',
    width: 60,
    height: 60,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  displaySymbolText: {
    fontFamily: 'Digital-7',
    fontSize: 60,
    color: 'white',
  },
});

export default DisplayStyles;
