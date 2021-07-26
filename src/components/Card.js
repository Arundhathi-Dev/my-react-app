import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import REACTIMAGE from "/Users/arundhathi/Desktop/my-app/src/components/download.png";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

Cards : {

},
Cardgroup:{
    display : 'flex'
},
 Cardone : {
    
    flex : '40%',
    float: 'left',
    background: '#f0f7fc',
    width : '35%',
    marginRight :'1%',
    marginLeft: '2%',
    paddingTop : '2%',
    border : '3px',
    paddingLeft: '2%',
    paddingBottom: '20px',
    paddingRight: '10%',

},
Cardtwo : {
    flex : '60%',
    float : 'right',
    width:'45%',
    background: '#f0f7fc',
    border : '3px',

    paddingTop : '20px',
    paddingLeft: '1%',
    paddingBottom: '20px',
    paddingRight: '2%',
    marginRight  : '2%',
    marginLeft: '1%'

},
leftcontainer : {
    float : 'left'
},
rightcontainer :{
    float : 'right'
},
lastCard : {
    marginTop : '20px',
    paddingTop:'20px',
    paddingLeft: '1%',
    paddingBottom: '20px',
    paddingRight: '20px',
    background: '#f0f7fc',
    marginRight :'1%',
    marginLeft: '20px',
}
}
);



function Card() {

    
    const classes = useStyles();



    return (
        <div className={classes.Cards}>
        <div className={classes.Cardgroup}>
            <div className={classes.Cardone}>

                <div className={classes.leftcontainer}>
                <ReactRoundedImage image={REACTIMAGE} roundedSize="0" imageWidth="200" imageHeight="200" />

                <p> Choose Your Avatar </p>
                </div>
                <div className={classes.rightcontainer}>
                <h1>USER PROFILE</h1>
                <p> Username: abc </p>
                <p>Email: abc@odu.in</p>
                <p>Gender: </p>
                <p>Location: </p>
                </div>

            </div>
            <div className={classes.Cardtwo}>
                <h1>CPCD ACTIVITIES</h1>
                <ul>
                <li>Completed Pre-Survey on <text style={{color: 'red'}}>Wednesday, December 31, 1969.
                </text></li>
                <li><p> Cultural Proficiency Continuum Q-sort form is pending your completion.</p></li>
                <li> <p>Cultural Proficiency Continuum Q-sort (i.e, unpacking) are pending your completion</p></li>
                <li><p>Your facilitators comments on your reactions are pending the facilitators completion. (You will receive an email notifying you to login into your profilr and review your facilitator's reactions.</p></li>
                <li><p>Post-Survey is pending your completion</p></li>
                </ul>
                <div className = "icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sim-fill" viewBox="0 0 16 16">
                    <path d="M5 4.5a.5.5 0 0 1 .5-.5h2v2H5V4.5zM8.5 6V4h2a.5.5 0 0 1 .5.5V6H8.5zM5 7h6v2H5V7zm3.5 3H11v1.5a.5.5 0 0 1-.5.5h-2v-2zm-1 0v2h-2a.5.5 0 0 1-.5-.5V10h2.5z"/>
                    <path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.414a1.5 1.5 0 0 0-.44-1.06L11.647.439A1.5 1.5 0 0 0 10.586 0H3.5zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                
                <img src="https://img.icons8.com/ios-glyphs/30/000000/new-message.png"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                    <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
                    <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                </svg>
                </div>
            </div>
        </div>
        <div className={classes.lastCard}>
                <h1>Cultural Proficiency Continuum Q-Sort: A Majority-Minority PreK-12 Schooling Context</h1>
                <p>Before engaging with the CPCQ, situate yourself as a new Teacher that educates a <b> <i>majority-minority student population.</i></b> The Cultural Proficiency Continuum Dialogic Protocol (CPCDP) is an emergent tool developed to examine, identify, and mediate preservice teachers’ sociocultural gaps and competencies, i.e., their sociocultural consciousness. Essentially, the CPCDP is a tool that generates data, i.e., a primary data source, that gives teacher educators the capacity to systematically examine teachers’ beliefs regarding the various sociocultural interactions that take place within majority-minority PreK-12 schools and student populations. The CPCDP was conceptualized and designed using the Compleat Cycle of Design Research (CCDR; Lamberg & Middleton, 2009; Middleton, Gorard, Taylor, & Bannan-Ritland, 2008), together with Q-Methodology (Brown, 1986, 1993, 2008; Stephenson, 1935) and two Multicultural Education frameworks and texts: Cultural Proficiency (Lindsey, Robins, & Terrell, 1999, 2009) and Courageous Conversations About Race (Singleton, 2015). Embedded within the CCDR are methods for designing pedagogical artifacts together with a means to implement them within real-world conditions, e.g., teacher education programs and professional development (PD) for preservice teachers. In this study, findings are discussed regarding the process and methods used for designing, developing, and implementing the CPCDP within various teacher education and PD contexts. Findings are also discussed regarding the CPCDP’s effect on participants together with the tool's capacity to facilitate meaning-making of participants’ cultural competence regarding a range of sociocultural interactions that take place within majority-minority PreK-12 schools and student populations.</p>
            </div>
        </div>
        

    )
}

export default Card;
