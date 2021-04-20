import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

//flex:${props=>props.flex};
//background-color:${props=>props.cor};
const Quadrado = styled.View `
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000000;
  margin-top: 30px;
`;

//Campo para digitar texto
const Input = styled.TextInput `
  height: 40px;
  width: 200px;
  border: 1px solid #000000;
`;


export default()=>{

  //criando uma const
  const [name, setName ] = useState('');
  const [backupName, setBackupName ] = useState('');
  const [mostrar, setMostrar ] = useState(false);

  //Funcao para alterar o texto
  const handleClick = () => {

    //alert("Clicou no botao");
    setBackupName(name);
    setMostrar(!mostrar); //inverte o valor de mostrar
  }

  return(

    <View>

      <Input value={name} onChangeText={texto=>setName(texto)} />
      <Button title = {mostrar ? 'Ocultar nome' : 'Mostrar nome'} onPress={handleClick}/>
      
      {mostrar == true &&

        <Quadrado> 
          <Text> Ola {backupName} </Text> 
        </Quadrado>

      }
    </View>

  );
}