import React from "react";
import axios from "axios";
import '../App.css';


class Signup_user extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            username:"",
            profession:""
        
        }
    }
    handleEmailChange=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    handleUserNameChange=(e)=>{
        this.setState({username:e.target.value})

    }
    handleProfessionChange=(e)=>{
        this.setState({
            profession:e.target.value
        })
    }
    
    handleLogin=()=>{
      const user={
          username:this.state.username,
          email:this.state.email,
          password:this.state.password,
          profession:this.state.profession

      }
      axios.post("http://dc7dbebfeb82.ngrok.io/user/register",user,{
        headers: {
            'Content-Type': 'application/json'
        }}).then(res=>{
          console.log(res)
      }).catch(err=>{
        console.log(err)
    })


    }
    render(){
        return(
            <div className="left1">
                            <br/>

                 <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
          <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleUserNameChange} /><br/><br/>

          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br/><br/>
          <input type="text" name="profession" placeholder="profession" value={this.state.profession} onChange={this.handleProfessionChange}/><br/><br/>
          <button type="button" onClick={this.handleLogin}>Sign Up</button>
        </form>
            </div>
        )
    }
}
export default Signup_user;