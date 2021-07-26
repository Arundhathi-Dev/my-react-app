import React from 'react';
import {NavLink} from "react-router-dom";
import REACTLOGO from "/Users/arundhathi/Desktop/onex/src/components/Navbar/images.png";


const Nav = {
    flex: '100%',
    marginRight: '2%',
    marginTop: '2%',
    marginBottom : '1%',
    justifyContent: 'spaceBetween',
    height: '10%',
    position : 'sticky',
    width : '100%',
    top: '0',
    background: 'white',
    
}


const Navlk = {
    float:'left',
    marginLeft: '20px',
    width : '50%',
}
const NavMenu = {
    float: 'right',
    color: 'black',
    fontWeight : '700',
    marginRight: '20px',
    justifyContent: 'spaceBetween',
    width : '50%',
    textDecoration: 'none',

    
}
 
const opt = {
    float: 'right',
    color: 'black',
    fontWeight : '700',
    marginRight: '20px',
    justifyContent: 'spaceBetween',

    textDecoration: 'none'
    
}




const Navbar =()=>{

    return(
        <>
        <div style={Nav}>
        <div style ={Navlk}>

        <NavLink to="/">
        <img src={REACTLOGO} alt = 'logo' height="50px" width = "150px" />
        </NavLink>
        </div>
        <div style={NavMenu}>
        <NavLink exact activeClassName="active_class" activeStyle = {opt} to='/'>Home</NavLink>
        <NavLink exact activeClassName="active_class" activeStyle = {opt} to = '/'>About Us</NavLink>
        <NavLink exact activeClassName="active_class" activeStyle = {opt} to = '/'>Logout</NavLink>
        </div>
        </div>
        
        
        </>

        


    );
};

export default Navbar;