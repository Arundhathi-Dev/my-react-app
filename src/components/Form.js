import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import REACTLOGO from "/Users/arundhathi/Desktop/my-app/src/components/images.png";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    Nav : {
       flex: '100%',
       justifyContent: 'spaceBetween',
       height: '48px',
       paddingTop: '1px',
       position : 'sticky',
       top: '0',
       background: 'white'
   },
   Navlk: {
       float:'left',
       flex: '50%',
       paddingTop: '1px',
       marginLeft: '20px'
   },
   NavMenu : {
       float: 'right',
       color: 'black',
       fontWeight : '700',
       marginRight: '20px',
       justifyContent: 'spaceBetween',
       flex: '50%',
       textDecoration: 'none'
   },
   opt : {
       float: 'right',
       color: 'black',
       fontWeight : '700',
       marginRight: '20px',
       justifyContent: 'spaceBetween',
       paddingTop: '25px',
       textDecoration: 'none'
   },
   head: {
    color:'#191970',
    marginTop : '12%',
    marginLeft: '35%',
    background: '#F0F8FF',
    border: '1px solid #001F3F',
    marginRight: '35%',
    paddingLeft: '10%',
    paddingBottom: '2%',
    paddingRight: '20px',
    paddingTop : '2%',

},
   
   lab : {
    display: 'flex',
    color : '#001F3F',
   },
   rec : {
    background: '#F5F5F5',

       width : '70%',
       marginTop : '2%',
       marginBottom : '2%',
       

   },
   sub : {
    color : '#001F3F',
    fontWeight: '700',
    border: '1px solid #001F3F',
    
   },
   eg: {
       background: '#F0F8FF',
       marginTop : '3%',
       marginLeft: '35%',
       marginRight: '35%',
    background: '#F0F8FF',
    border: '1px solid #001F3F',
    paddingLeft: '10%',
    paddingBottom: '2%',
    paddingRight: '20px',
    paddingTop : '2%',
       
   }
   
});



const Form = () => {
    const [toAdmin, setAdmin] = React.useState(false)

    const[Name, setName] = useState("");
    const[passWord, setpassWord] = useState("");

    const [NameErr, setNameErr] = useState({});
    const [passWordErr, setpassWordErr] = useState({});


    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid= formValidation();
        //if(isValid == true){
            //return <Redirect to='/Admin'/>


            //redirect
            //setName("");
            //setpassWord("");
        //}
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
    const history = useHistory()
    const classes = useStyles();

    return(
        <>
            <div className={classes.Nav}>
                    <div className={classes.Navlk}>
                         <NavLink to="/">
                                <img src={REACTLOGO} alt = 'logo' height="50px" width = "150px" />
                        </NavLink>
                    </div>
                    <div styleclassName={classes.NavMenu}>
                        <NavLink className={classes.opt} to='/'>Log Out</NavLink>
                        <NavLink className={classes.opt} exact activeClassName="active_class"  to = '/'>About Us</NavLink>
                        <NavLink className={classes.opt} exact activeClassName="active_class" to = '/'>Home</NavLink>
                    </div>
            </div>
            
                <h1 className={classes.head}>Log In</h1>
                <div className = {classes.eg}>
                <form onSubmit={() => history.push('/Admin')}>
                             
                
                    <div className={classes.lab} ><b> Enter your Email:</b></div>
                    <input type = "text"
                    className={classes.rec}
                    value = {Name}
                    onChange={(e)=>{setName(e.target.value)}}/>
                    <br/>
                    <div className={classes.lab}><b>Enter your Password:</b></div>
                    <input type = "text"
                    className={classes.rec}
                    value={passWord}
                    onChange={(e)=>{setpassWord(e.target.value)}}/>
                    <br/>
                    <br/>

                    <button type = "submit" className={classes.sub} >Submit</button>
                    

                </form>
                </div>
        </>
    )
}

export default Form;