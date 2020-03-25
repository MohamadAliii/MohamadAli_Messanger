import React from 'react'
import logo from '../../logo.svg'
import  Conversation from './conversation'

export default class ConversationList  extends React.Component{
    constructor(){
        super()
        this.state = {
            convList : [
                {
                    name : 'Abbas' , 
                    latestMessage : 'hi',
                    id : '1'
                },
                {
                    name : 'Ashkan' , 
                    latestMessage : 'hi',
                    id : '2'

                },
                {   
                    name : 'Ahmad' , 
                    latestMessage : 'hi',
                    id : '3'
                    
                },
                {
                    name : 'Akbar',
                    latestMessage : 'hi',
                    id : '4'

                },

            ]
        }
    }

    render(){
        return(
            <div className='conversation-list'>
                 <conversation name='maryam' />
                <conversation name='karim'      />
                <conversation name='reza'       />
                <conversation name='tina'       /> 
                {
                    this.state.convList.map( (conv) =>{ 
                        return(
                            <conversation name={conv.name} key={conv.id}/>
                        )
                    } )
                }

            </div>
            
        )
    }
}