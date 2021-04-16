import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';


/* opcoes para o justify-content e align-items
  justify-content: flex-start;    -- opcao padrao no inicio da linha ou coluna - posicao padrao
  justify-content: flex-end;      -- alinha no final da linha ou coluna
  justify-content: center;        -- alinha no centro da linha ou coluna
  justify-content: space-between; -- alinha na linha ou coluna com espaco entre os itens
  justify-content: space-around;  -- alinha na linha ou coluna com espaco a partir dos itens
*/

const Page = styled.SafeAreaView `
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View `
  background-color:#EEEEEE;
  flex-direction:row;
  justify-content: center;
  flex-wrap: wrap;
  height: 200px;
`;

//Campo para digitar texto
const Input = styled.TextInput `
  height: 40px;
  width: 200px;
  border: 1px solid #000000;
`;


/* opcoes para o flex-direction
  flex-direction:row;            -- comeca a linha normalmente - esquerda para a direita
  flex-direction:row-reverse;    -- comeca a linha da direita para a esquerda
  flex-direction:row;            -- comeca a coluna normalmente - de cima para baixo
  flex-direction:column-reverse; -- comeca de baixo para cima
*/

const Texto = styled.Text `
  color:${props=>props.cor};
  font-size: 30px;
  background-color:green;
`;

const Hello = () =>{ 

  //criando uma const
  const [name, setName ] = useState('Weuller');
  const [backupName, setBackupName ] = useState('');

  //criando uma funcao para mudar o texto
  /*
  function mudarTexto(texto){
    setName(texto);
  }
  */

  //Funcao para alterar o texto
  const handleClick = () => {

    //alert("Clicou no botao");
    setBackupName(name)
  }

  return(

    <View>
      <Input value={name} onChangeText={texto=>setName(texto)} />
      <Button title = "Trocar nome" onPress={handleClick}/>
      <Text> Ola {backupName} </Text>
    </View>
  );
}

//flex:${props=>props.flex};
const Quadrado = styled.View `
  width: 50px;
  height: 50px;
  background-color:${props=>props.cor};
`;

export default () =>{

  return(

      //O SafeAreaView usa somente a área segura da tela, r

      /* Elementos de texto
        <Text>Texto 2</Text>
        <Texto cor="red">Texto 3</Texto>
        <Texto cor="yellow">Texto 4</Texto>
      */

      /* Elementos de quadrado com props flex
        <Quadrado flex={1} cor="red"></Quadrado>
        <Quadrado flex={2} cor="blue"></Quadrado>
        <Quadrado flex={1} cor="green"></Quadrado>

        <Quadrado style={{alignSelf:'flex-end'}} cor="green"></Quadrado>

        <Header> 
          <Quadrado cor="red"></Quadrado>
          <Quadrado cor="blue"></Quadrado>
          <Quadrado cor="green"></Quadrado>
          <Quadrado cor="pink"></Quadrado>
          <Quadrado cor="red"></Quadrado>
          <Quadrado cor="blue"></Quadrado>
          <Quadrado cor="green"></Quadrado>
          <Quadrado cor="pink"></Quadrado>
          <Quadrado cor="red"></Quadrado>
          <Quadrado cor="blue"></Quadrado>
          <Quadrado cor="green"></Quadrado>
          <Quadrado cor="pink"></Quadrado>
        </Header>

      */

      <Page>
        <Hello/>
      </Page>
  );
}


