import React from "react";
import axios from "axios";
import '../App.css';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            username:"",
            location:"",
            title:""
        
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
    handleTitleChange=(e)=>{
        this.setState({title:e.target.value})
    }
    handleLocationChange=(e)=>{
        this.setState({location:e.target.value})

    }
    handleLogin=()=>{
      const user={
          title:this.state.title,
          username:this.state.username,
          email:this.state.email,
          location:this.state.location,
          password:this.state.password,

      }
      console.log(user.title,user.username,user.email,user.password,user.location);
      axios.post("http://dc7dbebfeb82.ngrok.io/companies/register",user,{
        headers: {
            'Content-Type': 'application/json'
        }}).then(res=>{
          console.log(res)
      }).catch(err=>{
        console.log(err.response.request._response)
    })


    }
    render(){
        return(
            <div className="right1">
                 <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} /><br/><br/>
          <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} /><br/><br/>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} /><br/><br/>
          <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleUserNameChange} /><br/><br/>

          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br/><br/>
          <button type="button" onClick={this.handleLogin}>Sign up</button>
        </form>
            </div>
        )
    }
}
export default Signup;