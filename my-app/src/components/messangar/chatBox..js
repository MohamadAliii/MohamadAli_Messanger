import React from 'react'
import Header from '../../container/headerContainer'
import Footer from './footer'
import ChatView from './chatView'
import Contact from './contact'
// import chatScreen from './chatScreen'


export default class ChatBox extends React.Component {
    constructor (){
        super ()
        this.state = {
            newMessage: ''
        }

        this.getNewMessage = this.getNewMessage.bind(this)
    }

    getNewMessage (newMessage){
        console.log('#####', newMessage)
        this.setState({newMessage})
    }
    
    render() {
        return(
           <React.Fragment>
            <div className='chat-box'>
                <Header />
                <ChatView newMessage={this.state.newMessage} />
                <Footer getValue= {this.getNewMessage} />
            </div>
            <div>   
                <Contact />
            </div> 
          </React.Fragment>    
        )
    }
}