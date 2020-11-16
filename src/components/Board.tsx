import React from 'react';
import Todo from "./ToDo"
import Doing from "./Doing"
  
function Board(props:any) {
    return(
        <>
        <h1>Board</h1>
        <div className="row container">
            <div className="col-lg-3 col-sm-4">
                <Todo/>
            </div>
            <div className="col-lg-3 col-sm-4">
                <Doing/>
            </div>
        </div>
        </>
    )

}
export default Board;
