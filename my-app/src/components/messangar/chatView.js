import React from 'react'
import {connect} from 'react-redux'


class ChatView extends React.Component {
    
    render(){
        return(
            <div className='chat-view'>
                {this.props.newMessage}
            </div>
        )
    }

}

const mapStateToProps = (state)=> ({
    newMessage: state.newMessage
})

export default connect(mapStateToProps)(ChatView)