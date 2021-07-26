import React , {Component} from 'react';
import {NavLink} from "react-router-dom";
import REACTLOGO from "/Users/arundhathi/Desktop/my-app/src/components/Navbar/images.png";
import {Redirect} from 'react-router-dom';

const Nav = {
    flex: '100%',
    justifyContent: 'spaceBetween',
    height: '58px',
    position : 'sticky',
    top: '0',
    background: 'white'
}
const Navlk = {
    float:'left',
    flex: '50%',
    paddingTop: '1px',

    marginLeft: '20px'
}
const NavMenu = {
    float: 'right',
    color: 'black',
    fontWeight : '700',
    marginRight: '20px',
    justifyContent: 'spaceBetween',
    flex: '50%',
    textDecoration: 'none'
}
const opt = {
    float: 'right',
    color: 'black',
    fontWeight : '700',
    marginRight: '20px',
    justifyContent: 'spaceBetween',
    paddingTop: '25px',
    textDecoration: 'none'   
}
const log = { 
    display : 'flex',
    marginTop : '3%',
    marginLeft : '30%',
    marginRight : '30%',
    background: '#f0f7fc',
    justifyContent: 'center',
    alignItems : 'center',
    marginRight :'20px',
    height : '40%',
    width : '30%',
    paddingLeft: '20px',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingTop : '20px',
    border: '1px solid #001F3F'

}
const head = {
    display: 'flex',
    color : '#001F3F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : '5%',
    marginLeft : '30%',
    marginRight : '30%',
    background: '#f0f7fc',
    paddingLeft: '20px',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingTop : '20px',
    width : '30%',
    border: '1px solid #001F3F'
}
const sub = {
    color : '#001F3F',
    fontWeight: '700',
    border: '1px solid #001F3F',

}
const em = {
    color : '#001F3F',
    fontWeight: '700'
}
const passe = {
    width : '100%',
    border: '1px solid #001F3F'

}
export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            email: '',
            password : '',
            loggedIn
        }
        this.onChange =  this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    submitForm(e){
        e.preventDefault()
        const {email, password} = this.state
        if(email === "admin@gmail.com" && password === "pass"){
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
    
        return (
            <div>
                <div style={Nav}>
                    <div style ={Navlk}>

                        <NavLink to="/">
                            <img src={REACTLOGO} alt = 'logo' height="50px" width = "150px" />
                        </NavLink>
                    </div>
                    <div style={NavMenu}>
                        <NavLink exact activeClassName="active_class" activeStyle = {opt} to = '/'>Log In</NavLink>
                        <NavLink exact activeClassName="active_class" activeStyle = {opt} to = '/'>About Us</NavLink>
                        <NavLink exact activeClassName="active_class" activeStyle = {opt} to = '/'>Home</NavLink>
                    </div>
                </div>
                <div style = {head}>
                    <h1>Log In </h1>
                </div>
                <div style = {log}>
                    <form onSubmit = {this.submitForm}>
                        <div style = {em}><p>Enter your Email</p></div>
                        <input type = "text" style={passe} name = "email" id = "email" autoComplete="off"
                            value={this.state.email}
                            onChange = {this.onChange}/>
                        <br/>
                        <div style = {em}><p>Enter your Password</p></div>

                        <input type = "password" style={passe}  name = "password" id = "password"
                            value={this.state.password}
                            onChange = {this.onChange}/>
                        <br/>
                        <br/>
                        <input type = "submit" style = {sub} />
                    </form>
                </div>

            </div>
        )
    }
} 