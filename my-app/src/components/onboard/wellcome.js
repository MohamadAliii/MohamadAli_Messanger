import React from 'react'
import logo  from '../../logo.png'
import {Link} from 'react-router-dom'

export default class Wellcome extends React.Component{
    render (){
        return(
            <div className="App">    
                    <div className= 'wellcome-header'><h3 className='menu'>MENU</h3>
                        <Link className='link' to ='/login/'>LOGIN</Link>
                        <Link className='link1' to ='/signup/'>SIGN UP</Link>
                        <Link className='link2' to ='/chatbox/'>CHAT ROOM</Link>
                    </div>
                      
                    <img src={logo} className="logo" alt="grape" />
                        <p className='mohamadali'>
                            {/* <code>it is Mohamad Ali Rahim react project</code> */}
                        </p>
            </div>
        )
    }
}