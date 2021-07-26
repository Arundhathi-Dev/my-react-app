import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import { useHistory,withRouter } from "react-router-dom";
import { useInput } from '/Users/arundhathi/Desktop/my-app/src/components/Login/Useinput.js';



function NameForm(props) {
    const { value, bind, reset } = useInput('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //evt.history.push('/Admin')

        alert(`Submitting Name ${value}`);
        reset();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" {...bind} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

export default withRouter(NameForm)
/*export function NameForm(props) {
    const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
} */
