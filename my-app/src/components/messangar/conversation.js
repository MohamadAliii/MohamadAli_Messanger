import React from 'react'
import userIcon from '../../useer.png'
// import ConversationList from'./conversationList'
// import {connect} from 'react-redux'
// import {saveUsername} from '../../action/conversation'

class Conversation extends React.Component{


    render(){
        return(
                
                <div className='conversation'>
                    <img src={{userIcon}}/>
                        <div className='info'>
                            <span>{this.props.name}</span>
                            <span>Salam</span>
                        </div>
                </div>           
        )
    }
}
export default Conversation
// const mapDispatchToProps = (dispatch) => ({
//     dispatch : dispatch
// })

// export default connect(mapDispatchToProps)(conversation)