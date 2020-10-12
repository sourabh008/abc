import React from 'react';
import './App.css';
import {  BrowserRouter as Router,Link,
  Switch,Route} from "react-router-dom";
  import Devoloper from "./component/Devoloper";
  import Companies from "./component/Companies";

class App extends React.Component{
  render(){
    return (
      <div>
      <Router>
      <div className="left">
        <Link to="/devoloper">For Devoloper</Link></div><br/>
        <div className="right"> <Link to="/company">For Companies</Link></div>
      
        <div>
          <Route exact path="/devoloper" component={Devoloper}/>
          <Route exact path="/company" component={Companies}/>
        {/* </Switch> */}
        </div>
        </Router>

    </div>
    
    )}
}


export default App;
