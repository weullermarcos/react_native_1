import React from 'react';
import styled from 'styled-components/native';

const Scroll = styled.ScrollView `
  flex:1;
  background-color: #FF0000;
  width:100%;
  max-height:500px;
`;

const Item = styled.TouchableOpacity `
  padding:10px;
  background-color: #EEEEEE;
  flex-direction: row;
`;

const ItemCheck = styled.View `
  width:20px;
  height: 20px;
  border-radius:10px;
  border:5px solid #CCCCCC;
  background-color: ${props=>props.done ? '#CCCCCC' : 'transparent'};
`;

const ItemText = styled.Text `
  font-size:15px;
  flex:1;
`;

export default(props)=>{

    return(

        <Item onPress={props.onPress} activeOpacity={0.7}> 
            <>
                <ItemText> {props.data.task} </ItemText>
                <ItemCheck done={props.data.done}></ItemCheck>
            </>
        </Item>

        /* <Scroll>
        {lista.map((item, index)=> {

          return (
            <Item key={index} activeOpacity={0.7}> 
              <>
                <ItemText> {item.task} </ItemText>
                <ItemCheck></ItemCheck>
              </>
            </Item>
          );
        })}
      </Scroll> */

    );
}

