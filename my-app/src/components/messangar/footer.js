import React from 'react'
import sendddIcon from '../../senddd.png'
import {connect} from 'react-redux'
import {sendNewMessage} from '../../action/conversation'

class Footer extends React.Component {
    constructor (){
        super ()
        this.state = {
            newMessage: ''
        }
    }
sendMessage (){
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({newMessage:''})
    // value = {this.state.newMessage}
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
                // onClick={() => this.props.getValue(this.state.newMessage)}
                onClick={() => this.sendMessage()}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch:dispatch
})

export default connect(mapDispatchToProps)(Footer)