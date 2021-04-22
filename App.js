import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native'; //configuracoes de cada plataforma Android - IOS
import { SafeAreaView, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';
import Calculadora from './src/components/Calculadora';
import TrocaTexto from './src/components/TrocaTexto';
import CarregaImagem from './src/components/CarregaImagem';


/* opcoes para o justify-content e align-items
  justify-content: flex-start;    -- opcao padrao no inicio da linha ou coluna - posicao padrao
  justify-content: flex-end;      -- alinha no final da linha ou coluna
  justify-content: center;        -- alinha no centro da linha ou coluna
  justify-content: space-between; -- alinha na linha ou coluna com espaco entre os itens
  justify-content: space-around;  -- alinha na linha ou coluna com espaco a partir dos itens
*/

/* opcoes para o flex-direction
  flex-direction:row;            -- comeca a linha normalmente - esquerda para a direita
  flex-direction:row-reverse;    -- comeca a linha da direita para a esquerda
  flex-direction:row;            -- comeca a coluna normalmente - de cima para baixo
  flex-direction:column-reverse; -- comeca de baixo para cima
*/

//O SafeAreaView evita de pegar areas da tela que nao podem ser usadas
const Page = styled.SafeAreaView `
  flex:1;
  align-items: center;
  justify-content: center;
`;

export default () =>{

  //vamos usar para identificar a plataforma Android - IOS
  useEffect(()=>{

    //let largura = Dimensions.get('window').width; //pega a largura
    //let altura = Dimensions.get('window').height; //pega a altura
    //var {height, width} = Dimensions.get('window'); //pega a altura

    //alert("Largura: " + width + " - Altura: " + height); //exibe largura e altura
    //alert("SO: " + Platform.OS + " - versao: " + Platform.Version); //exibe qual e a plataforma e versao
  
    /*
    Alert.alert(
      "Titulo",
      "Mensagem",
      [
        {
          text: "Botao 1",
          onPress: () => console.log("Acao 1")
        },
        {
          text: "Botao 2",
          onPress: () => console.log("Acao 2"),
          style: "cancel"
        },
        { 
          text: "Botao 3", 
          onPress: () => console.log("Acao 3") 
        }
      ]
    );
    */

  }, []);


  return(


    <Page>
      
      {/* <Header/> */}
      {/* <Calculadora/> */}
      {/* <TrocaTexto/> */}
      <CarregaImagem/>

      <Image source={require('./src/images/rba.jpg')} 
             style={{width: 200, height: 300}}
             resizeMode="stretch"
      />
      
      
    </Page>
  );
}


