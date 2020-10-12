import React from "react";
import axios from "axios";
import '../App.css';
import ls from 'local-storage'


class Login_user extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            login:false
        }

    }
    
    handleUsernameChange=(e)=>{
        this.setState({username:e.target.value})
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    handleLogin=()=>{
      const user={
          username:this.state.username,
          password:this.state.password
      }
      axios.post("http://dc7dbebfeb82.ngrok.io/user/login",user,{
        headers: {
            'Content-Type': 'application/json'
        }}).then(res=>{
            ls.set("token",res.data.token.access);
            this.setState({login:true})
        //   console.log(res.data.token.access)
      }).catch(err=>{
        console.log(err)
    })

    }

    render(){
       if(!this.state.login){
        return(
            
            <div className="left1">
                <br/>
         <form>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} /><br/><br/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br/><br/>
          <button type="button" onClick={this.handleLogin}>Login</button>

        </form>
       
    {/* <h1>{ls.get("token")}</h1> */}
            </div>
        )
    }else{
        return <h1>vsdxc</h1>
    }
       }

       
}
export default Login_user;