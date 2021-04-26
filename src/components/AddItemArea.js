import React, {useState} from 'react';
import styled from 'styled-components/native';
// import uuid from 'uuid/v4';


const AddItemArea = styled.View `
  background-color:#CCCCCC;
  padding: 10px;
`;

const AddItemInput = styled.TextInput `
  background-color:#FFFFFF;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding:10px;
`;

export default(props) => {

    const [item, setItem] = useState('');

    const handleSubmit = () => {
        // alert(item);
        
        //verifica se o item nao esta vazio 
        if(item.trim != ''){
            
            // executo a props criada no arquivo principal
            props.onAdd(item.trim());
            
            // limpo o item
            setItem('');
        }

    }

    return(

        <AddItemArea> 
            <AddItemInput placeholder="Digite um novo item"
                          value={item}
                          onChangeText={e=>setItem(e)}
                          onSubmitEditing={handleSubmit}
                          returnKeyType="send"
            />
        </AddItemArea>

    );
}






