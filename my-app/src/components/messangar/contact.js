import React from 'react'
import userIcon from '../../usr.png'
import ConversationList from './conversationList'
import Conversation from './conversation'


export default class Contact extends React.Component {
    render() {
        return(
            <div className='contact-list'>
            <div className='header-contact'>
                <h1 className='contact-title'>Contacts</h1>
            </div>
            <div className='contact-screen'>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
                <img src={userIcon} alt="user" className= 'userlogo'/>
            </div>
        </div>
            
        )
    }
}