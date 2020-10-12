import React from "react";
import axios from "axios";
import '../App.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            username:""
        
        }
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    handleUserNameChange=(e)=>{
        this.setState({username:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username,
            password:this.state.password
        };
        axios.post("http://dc7dbebfeb82.ngrok.io/user/login",{user}).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.username)



    }
    render(){
        return(
            <div className="right1">
                 <form onSubmit={this.handleSubmit}>
         
          <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleUserNameChange} /><br/><br/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br/><br/>
          <button type="submit">Login</button>

        </form>
            </div>
        )
    }
}
export default Login;