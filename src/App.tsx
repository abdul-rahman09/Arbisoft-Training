import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Board from "./components/Board"

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
