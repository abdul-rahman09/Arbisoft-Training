import React from 'react';
import AddCard from "./AddCard"
import styled from 'styled-components';

const MyDiv = styled.div.attrs(props => ({
}))`
    background-color: papayawhip;
    margin: 2px;
    padding:10px;
`;
  
function Todo(props:any) {
    return(
        <MyDiv>
            <h6>Todo</h6>
            <AddCard/>
        </MyDiv>
    )

}
export default Todo;