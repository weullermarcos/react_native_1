import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

export default()=>{

    return(

        <Container>
        <Header>
          <Left />
          <Body>
            <Title>Meu Titulo</Title>
            <Subtitle>Meu Sub-Titulo</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>

    );
}


