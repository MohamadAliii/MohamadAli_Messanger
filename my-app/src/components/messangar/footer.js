import React from 'react'
import sendddIcon from '../../senddd.png'


export default class Footer extends React.Component {
    constructor (){
        super ()
        this.state = {
            newMessage: ''
        }
    }
    render(){
        return(
            <div className='footer-chat'>    
                <input 
                type="text" 
                className='new-message-chat'
                onChange={(e) => this.setState({newMessage: e.target.value})}
                />
                <img
                alt= 'send' 
                className= 'sendicon' 
                src={sendddIcon}
                onClick={() => this.props.getValue(this.state.newMessage)}
                />
            </div>
        )
    }
}