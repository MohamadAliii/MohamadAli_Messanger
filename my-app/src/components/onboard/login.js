import React from 'react'
import loginLogo from '../../login.png'
import validate from '../../validation/validateFunction'


class Login extends React.Component{
    
    constructor(){
        super()
        
        this.state = {
           
            fields :{
                email : '',
                password : '',
           },
            errors :{
                email : '',
                password : '',
            },
               
            clicked : false , 

        }
        this.handleInfo = this.handleInfo.bind(this)

    }

    handleInfo(event){
        console.log(':::' , event.target.value)
        const name = event.target.name
        this.setState({ [name] : event.target.value })
    }
    
    handleErrors(){

        let error = {
            
            password : validate('password' , this.state.fields.password),
            email    : validate('eamil'    , this.state.fields.email   ),
        }

            console.log('errors:::',error)
            this.setState({ error })
    }

render(){
    return(
        
      <React.Fragment>
        <div className ='main'>
            
            <span className ='titlelog'>LOGIN</span>
 
            <label>Email :</label>
            <input 
            className ='inpe' type="email" 
            placeholder="eamiladdress@gamil.com" 
            onChange = {this.handleInfo}
            onBlur = {(event) => this.handleErrors() }
            />
            
            <label>Password :</label>
            <input 
            className ='inpp' type="password" 
            placeholder="************" 
            onChange = {(event)=>this.handleInfo(event) }
            onBlur = {(event) => this.handleErrors() }
            />

            <button className ='login'>LOGIN</button>

            <p className ='forget'>Forgot Password ?!</p>

        </div>
        <img src={loginLogo} className='loginlogo' alt="Login"/>
    </React.Fragment>
     
        
        )
    }

}

export default Login