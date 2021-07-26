import './App.css';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Login from "/Users/arundhathi/Desktop/my-app/src/components/Login/Login.js";
import Admin from "/Users/arundhathi/Desktop/my-app/src/components/Login/Admin.js";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login}/>
        <Route path = "/admin" component = {Admin}/>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
