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

        //verifica se o item nao foi enviado em branco
        if(item.trim() != ''){

            let items = [...props.items];//clonando a lista de itens para adicionar o novo item

            //cria um novo item e adiciona ao array
            items.push({
                id: 50, //criar uma forma de incrementar o id
                task:item.trim(),
                done:false
            });

            //seta o novo array via props
            props.setItems(items);
        }
        
        setItem('');

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






