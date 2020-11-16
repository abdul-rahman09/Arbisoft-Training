import React from 'react';
import DoingCard from "./DoingCard"
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
            <h6>Doing</h6>
            <DoingCard/>
        </MyDiv>
    )

}
export default Todo;