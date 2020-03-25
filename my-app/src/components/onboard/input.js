// import React from 'react'

// // export default Input extends React.Component

// export default class Input extends React.Component {
//     constructor(props){
//         super(props)
//         this.increcment = this.increcment.bind(this)
//         this.decrement  = this.decrement.bind(this)
//         this.state = {
//             count: 1
//         }
//     }

//     increcment (){
//         this.setState((prevState)=>{
//             return{
//                 count : prevState.count + 1
//             }
//         })
//     }    

//     decrement (){
//         this.setState((prevState)=>{
//             return{
//                 count : prevState.count - 1
//             }
//         })
//     } 
    
//         render (){
//             return(
//                 <div>
//                     <h2> count : {this.state.count }</h2>
//                     <button onClick = {this.increcment}>Increment</button>
//                     <button onClick = {this.decrement}>Decrement</button>
//                 </div>
//         )       
//     }
// }

<React.Fragment>
<div className='chat-box'>
    <Header />
    <ChatView newMessage={this.state.newMessage} />
    <Footer getValue= {this.getNewMessage} />
</div>
    <Contact />
</React.Fragment>    