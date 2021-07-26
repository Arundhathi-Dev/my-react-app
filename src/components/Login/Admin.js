import React , {Component} from 'react';
import {NavLink} from "react-router-dom";
import REACTLOGO from "/Users/arundhathi/Desktop/my-app/src/components/Navbar/images.png";
import Card from "/Users/arundhathi/Desktop/my-app/src/components/Card/Card.js";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
     Nav : {
        flex: '100%',
    
        justifyContent: 'spaceBetween',
        height: '58px',
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
    }
});
export default function Admin () {
        const classes = useStyles();
        return (
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
                <Card/>
        
            </>
        )
    }
