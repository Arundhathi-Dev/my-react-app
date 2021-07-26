import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';


const Form = () => {
    const[Name, setName] = useState("");
    const[passWord, setpassWord] = useState("");

    const [NameErr, setNameErr] = useState({});
    const [passWordErr, setpassWordErr] = useState({});


    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid= formValidation();
        if(isValid){
            <Redirect to="/admin" />

            //redirect
            setName("");
            setpassWord("");
        }
    }
    const formValidation= ()=>{
        const NameErr = {};
        const passWordErr = {};
        let isValid = true;

        if(!passWord.includes("123")){
            passWordErr.passWord123 = "incorrect";
            isValid = false;
        }
        setNameErr(NameErr);
        setpassWordErr(passWordErr);
        return isValid;
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input type = "text"
            value = {Name}
            onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <label>Password:</label>
            <input type = "text"
            value={passWord}
            onChange={(e)=>{setpassWord(e.target.value)}}/>
            <br/>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Form;