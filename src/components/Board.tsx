import React from 'react';
import Todo from "./ToDo"
  
function Board(props:any) {
    return(
        <>
        <h1>Board</h1>
        <div className="row container">
            <div className="col-lg-3 col-sm-4">
                <Todo/>
            </div>
        </div>
        </>
    )

}
export default Board;