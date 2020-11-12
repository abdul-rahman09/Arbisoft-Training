import React, {useState} from "react"
import PersonalInformation from "./AddContainerPerson"

function App() {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
  
    return (
      <div className="App">
        <PersonalInformation
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          setFirstName={setFirstName}
          setMiddleName={setMiddleName}
          setLastName={setLastName}
        />
      </div>
    );
  }
  export default App;