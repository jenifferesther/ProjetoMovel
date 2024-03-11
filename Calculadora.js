
import { useState } from 'react';
import { Button,Text,TextInput,View } from 'react-native';

const Calculadora =()=>{
    const[Parcela1, setParcela1]= useState(0);
    const[Parcela2, setParcela2]= useState(0);
    const [soma, setSoma]= useState(0);

    return(
        <View>
            <Text> Calculadora </Text>
            <TextInput defaultValue={Parcela1.toString()} onChange={(texto) => setParcela1(Number(texto))}/>
            <TextInput defaultValue={Parcela2.toString()} onChange={(texto)=> setParcela2 (Number(texto))}/>
            <Button title='Somar' onPress={()=> setSoma(Parcela1 + Parcela2)}/>
            <Text> Soma: {soma}</Text>


        </View>
         
    
    );
}

export default Calculadora;
