import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native'; //configuracoes de cada plataforma Android - IOS
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

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

export default()=>{

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

    return(

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

    );
}
