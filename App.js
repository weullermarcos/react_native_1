import React from 'react';
//import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';


const Page = styled.SafeAreaView `
  flex:1;
  background-color:blue;
`;

const Texto = styled.Text `

  color:${props=>props.cor};
  font-size: 30px;
  background-color:green;
`;

export default () =>{

  return(

      //O SafeAreaView usa somente a área segura da tela, recomendado para o caso do iphone
      <Page>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Texto cor="red">Texto 3</Texto>
        <Texto cor="yellow">Texto 4</Texto>
      </Page>
  );
}


