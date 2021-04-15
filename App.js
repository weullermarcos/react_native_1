import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';


const Page = styled.SafeAreaView `
  flex:1;
  flex-direction:row;
`;

const Texto = styled.Text `

  color:${props=>props.cor};
  font-size: 30px;
  background-color:green;
`;

const Quadrado = styled.View `
  width: 50px;
  height: 50px;
  background-color:${props=>props.cor};
`;

export default () =>{

  return(

      //O SafeAreaView usa somente a área segura da tela, r
      <Page>
        <Text>Texto 2</Text>
        <Texto cor="red">Texto 3</Texto>
        <Texto cor="yellow">Texto 4</Texto>

        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="green"></Quadrado>

      </Page>
  );
}


