import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
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
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
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
      */

      <Page>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="green"></Quadrado>
      </Page>
  );
}


