import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';


const LocalView = styled.View `
  align-items: center;
  justify-content: center;
`;

export default()=>{

    //criando uma const
    const [status, setStatus] = useState('');

    return(

        <LocalView> 
        
            <Image source={{uri:'https://www.google.com.br/google.jpg'}}
                    // defaultSource={require('./loading.png')}
                    style={{width: 200, height: 300}}
                    resizeMode="stretch"
                    onLoadStart={()=> setStatus('Carregando...')}
                    onLoad={()=> setStatus('Carregou!')}
                    onError={(e)=> alert(e.nativeEvent.error)}
            />

        <Text> {status} </Text> 

        </ LocalView>

    );
}

