import React from 'react';
import DoingCard from "components/DoingCard"
import styled from 'styled-components';

const MyDiv = styled.div`
    background-color: papayawhip;
    margin: 2px;
    padding:10px;
`;
  
function Todo() {
    return(
        <MyDiv>
            <h6>Doing</h6>
            <DoingCard/>
        </MyDiv>
    )

}
export default Todo;
