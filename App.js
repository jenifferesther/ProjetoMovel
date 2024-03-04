import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome , sobrenome, outro) => { 
  return nome + ' ' + sobrenome + outro;
}

const Cat = ({nome,sobrenome}) => {
  return <Text> Hello, I am abc {getNomeCompleto(nome, sobrenome, 'Outro').toUpperCase()}</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome='Black' sobrenome=' Pink'/>
      <Cat nome='apolo' sobrenome='pedra'/>
      <Cat nome='pink' sobrenome='black'/>
      <StatusBar style="auto" />
    </View>
  );s
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
