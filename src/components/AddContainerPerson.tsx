import React from "react"
import {Props} from "./models"
function PersonalInformation(props:Props
    // setFirstName,
    // setMiddleName,
    // setLastName
  ) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Please fill up the details</h1>
  
        <div style={{ margin: "0 auto", width: "350px" }}>
          <h3>First name:</h3>
          <input onChange={e => props.setFirstName(e.target.value)} />
  
          <h3>Middle name:</h3>
          <input onChange={e => props.setMiddleName(e.target.value)} />
  
          <h3>Last name:</h3>
          <input onChange={e => props.setLastName(e.target.value)} />
        </div>
  
        <h1 style={{ textAlign: "center" }}>Results</h1>
        <div style={{ margin: "0 auto", width: "350px" }}>
          <h3>First name: {props.firstName} </h3>
          <h3>Middle name: {props.middleName} </h3>
          <h3>Last name: {props.lastName} </h3>
        </div>
      </div>
    );
  }
  export default PersonalInformation;