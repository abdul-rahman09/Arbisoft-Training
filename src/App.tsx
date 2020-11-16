import React from 'react';
import './App.css';
import {connect} from "react-redux";
import styled from 'styled-components';
import Board from "./components/Board"
const MyH1 = styled.h1`
  color: red;
`;
function App(props:any) {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

const stateToProps = (state:any) =>{
  return{
  } 
}
const mapDispatchToProps = {
}
export default connect(stateToProps, mapDispatchToProps)(App);
