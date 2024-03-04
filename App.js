import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome , sobrenome,) => { 
  return nome + ' ' + sobrenome;
}

const Cat = ({nome,sobrenome,idade}) => {
  //let texto= 'anos'
  //if(idade <= 1){ 
    //texto='ano'
  //}

  const texto =( idade <= 1)? 'ano' : 'anos';

  return <Text> Olá, sou  {getNomeCompleto(nome, sobrenome).toUpperCase()} minha idade {idade}{texto}</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome='Black' sobrenome=' Pink' idade={15}/>
      <Cat nome='apolo' sobrenome='pedra' idade={5}/>
      <Cat nome='pink' sobrenome='black' idade={1}/>
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
