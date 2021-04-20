import React, { useState, useEffect } from 'react';
import { Platform, Dimensions, Alert } from 'react-native'; //configuracoes de cada plataforma Android - IOS
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';


/* opcoes para o justify-content e align-items
  justify-content: flex-start;    -- opcao padrao no inicio da linha ou coluna - posicao padrao
  justify-content: flex-end;      -- alinha no final da linha ou coluna
  justify-content: center;        -- alinha no centro da linha ou coluna
  justify-content: space-between; -- alinha na linha ou coluna com espaco entre os itens
  justify-content: space-around;  -- alinha na linha ou coluna com espaco a partir dos itens
*/

const Page = styled.SafeAreaView `
  flex:1;
  align-items: center;
`;

const HeaderLocal = styled.View `
  background-color:#EEEEEE;
  flex-direction:row;
  justify-content: center;
  flex-wrap: wrap;
  height: 200px;
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
  const [name, setName ] = useState('');
  const [backupName, setBackupName ] = useState('');
  const [mostrar, setMostrar ] = useState(false);

  //criando uma funcao para mudar o texto
  /*
  function mudarTexto(texto){
    setName(texto);
  }
  */

  //Funcao para alterar o texto
  const handleClick = () => {

    //alert("Clicou no botao");
    setBackupName(name);
    setMostrar(!mostrar); //invete o valor de mostrar
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

const HeaderText = styled.Text `
  font-size: 25px;
  margin-top: 10px;
`;

//Campo para digitar texto
const Input = styled.TextInput `
  height: 50px;
  width: 90%;
  font-size: 15px;
  background-color: #EEEEEE;
  margin-top: 25px;
  border-radius: 10px;
  padding: 10px;  
`;

//Botao Calcular
const CalcButton = styled.Button `  
  margin-top: 60px;
`;

//Area que exibe o resultado
const ResultArea = styled.View `
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 3px dashed #CCCCCC;
  margin-top: 30px;
`;

//Titulo dos resultados
const ResultItemTitle = styled.Text `
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

//Campo para exibir resultado
const ResultItem = styled.Text `
  font-size: 12px;
  margin-top: 20px; 
`;

//Campo para area de porcentagem
const PctArea = styled.View `
  flex-direction: row;
  margin: 20px; 
`;

//Botao de porcentagem
const PctItem = styled.Button ``;

//Campo para area de porcentagem
const KeyboardArea = styled.KeyboardAvoidingView `

  width: 100%;
  flex: 1;
  background-color: ${Platform.OS == 'ios' ? '#00FF00' : '#0000FF'};
  justify-content: center;
  align-items: center;

`;

export default () =>{

  const [bill, setBill ] = useState(''); //valor da conta
  const [tip, setTip ] = useState(0); //valor da gorgeta
  const [pct, setPct ] = useState(10); //valor padrao da porcentagem

  const calc = () => {

    //Convertendo bill de string para float
    let nBill = parseFloat(bill); 

    if(nBill){
      setTip(nBill * (pct/100));
    }
  }

  //e uma especie de um listener, eu informo quais const ou objetos ele deve monitorar
  //e quando ocorrer algo ele executa determinado comando
  //se nenhum parametro for informado no [] ele sõ executara uma unica vez ao criar o componente
  useEffect(()=>{

    //alert("Executou");
    calc();

  }, [pct]);

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
        
        <Header/>

        <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>

          <HeaderText>Calculadora de Gorjeta</HeaderText>
          <Input 
            placeholder = "Quanto deu a conta?"
            placeholderTextColor = "#000000"
            keyboardType = "numeric"
            value={bill}
            onChangeText={n=>setBill(n)}
          />
          
          <PctArea>
            <PctItem title="5%"  onPress={()=>setPct(5)}/>
            <PctItem title="10%" onPress={()=>setPct(10)}/>
            <PctItem title="15%" onPress={()=>setPct(15)}/>
            <PctItem title="20%" onPress={()=>setPct(20)}/>
          </PctArea>

          <CalcButton
            title = {`Calcular ${pct}%`}
            onPress={calc}
          />

          {tip > 0 &&

            <ResultArea>
              <ResultItemTitle>Valor da Conta</ResultItemTitle>
              <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
              
              <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
              <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>
              
              <ResultItemTitle>Valor Total</ResultItemTitle>
              <ResultItem>R$ {(parseFloat(bill) + parseFloat(tip)).toFixed(2)}</ResultItem>
            </ResultArea>
          }
          
        </KeyboardArea>
        
      </Page>
  );
}


