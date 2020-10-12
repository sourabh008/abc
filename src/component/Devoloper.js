import React from 'react';
// import './App.css';
import {  BrowserRouter as Router,Link,
    Switch,Route} from "react-router-dom";
    import Login_user from "./Login_user";
    import Signup_user from "./Signup_user";
    import '../App.css';


class Devoloper extends React.Component{
    render(){
        return(
            
            <Router>
                <div className ="left1">
            <Link to="/devoloper/login_user">Login User</Link><br/><br/> 
             <Link to="/devoloper/signup_user">Signup User</Link></div>
                  <Switch>
               <Route exact path="/devoloper/login_user" component={Login_user}/>             
               <Route exact path="/devoloper/signup_user" component={Signup_user}/ >
             </Switch>
            </Router>
            
        )
    }
}
export default Devoloper;
