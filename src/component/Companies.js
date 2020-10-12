import React from "react";
import {  BrowserRouter as Router,Link,
    Switch,Route} from "react-router-dom";
    import Login from "./Login";
    import Signup from "./Signup";
    import '../App.css';

class Company extends React.Component{
   
    
    render(){
        return(
       <Router>
         <div className="right">
       <Link to="/companies/login">Login</Link><br/><br/>
       <Link to="/companies/signup">Signup</Link><br/></div>
             <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route exact path="/companies/login" component={Login}/>
          <Route exact path="/companies/signup" component={Signup}/>
          
        </Switch>
       </Router>

            
        )
    }
}
export default Company;