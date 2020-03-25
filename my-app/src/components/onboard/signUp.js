import React from 'react'
// import validation from '../../validation/validation'
import validate from '../../validation/validateFunction'
import signUpLogo from '../../signup.png'

class SignUp extends React.Component{
    
    constructor(){
        super()

        this.state = {
           
            fields :{
                email : '',
                password : '',
                confirm :'', 
           },
            errors :{
                email : '',
                password : '',
                confirm :'',
            },
               
            clicked : false , 

        }

        this.handleClick = this.handleClick.bind(this)
    
    }


    handleChange (event){
        
        console.log(':::::',event.target.value)
        const name = event.target.name
        this.setState({ [name]: event.target.value })
    }

    handleError(){

        let error = {
            
            password : validate('password' , this.state.fields.password),
            email    : validate('eamil'    , this.state.fields.email   ),
        }

            console.log('errors:::',error)
            this.setState({ error })
    }

    handleFeilds (event){

        let fields = this.state.fields
        fields['email'] = event.target.value
        this.setState({fields})
    
        this.setState({...this.state , fields:{...this.state.fields , eamil : event.target.value}})
    }

    handleClick (){
       
        console.log("handleClick:::")
        this.setState({clicked : true})
    }

    // handleEmail (){

    //     this.setState({...this.state , fields:{...this.state.fields , email:event.target.value}})
    // }

    
    
 
render(){
    return(
        <React.Fragment>
            <div className='container'>

                <p className='title'>Sign Up</p>

                <label>Email :</label>
                    <input type='email' placeholder='emailadress@gamil.com' 
                    onChange={(e) => this.handleChange(e)}
                    // onChange = {(event)=>this.setState({password : event.target.value})}
                    onBlur = {()=> this.handleError()}
                    // onClick = {() => this.setState.handleClick()}
                    name='email'
                    />

                    {/* {this.state.errors.email !== null} 
                        <p style={{ color : 'red' }}>{this.state.errors.email}</p> */}
                    

                <label>Password :</label>
                    <input type='password' placeholder='************'
                    onChange={(e) => this.handleChange(e)}
                    // onChange = {(event)=>this.setState({password : event.target.value})}
                    onBlur = {()=> this.handleError()}
                    name='password'
                    /> 
                    {/* {
                        this.state.errors.password.length < 5 &&
                            <p>Invalid Password</p>
                    }
                 */}
                <label>Confirm Your Password :</label>   
                    <input type='password' placeholder='************'
                    onChange={(e) => this.handleChange(e)}
                    onBlur = {()=> this.handleError()}
                    name='confirm'
                    />         

                    {/* {
                    this.state.fields.confirm .length < 5 &&
                        <p style={{color:'red'}}>Invalid Password</p>
                    } */}
                
                <button>SIGN UP</button>
            </div>
            <img src={signUpLogo} alt="Sign Up" className='signuplogo'/>
        </React.Fragment>

        )
    }     
}


export default SignUp