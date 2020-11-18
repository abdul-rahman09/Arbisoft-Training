import React from 'react';
import AddCardContainer from "containers/TodoCardContainer"
import DoneCardContainer from "containers/DoneCardContainer"
  
function Board() {
    return(
        <>
        <h1>Board</h1>
        <div className="row container">
            <div className="col-lg-3 col-sm-4">
                <AddCardContainer/>
            </div>
            <div className="col-lg-3 col-sm-4">
                <DoneCardContainer/>
            </div>
        </div>
        </>
    )

}
export default Board;
