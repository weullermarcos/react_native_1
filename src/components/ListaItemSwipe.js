import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight `
  background-color:#FF0000;
  width:100%;
  height:50px;
  justify-content:center;
`;

const ListaItemIcon = styled.View `
  background-color:#FFFFFF;
  width:20px;
  height:20px;
  margin-left:15px;
`;

export default(props) =>{

    return(

        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333"> 
        
            <ListaItemIcon></ListaItemIcon>

        </ListaItemSwipe>
    );

}





