const Init = {
    name: '',
    newMessage : ''
}

export default function conversation (state = Init, action){
    switch (action.type){
        case 'SAVE-USERNAME':
            return {
                ...state ,
                name: action.payload
            }
        
        case 'SEND_NEW_MESSAGE':
            return {
                ...state , 
                newMessage: action.payload
            }
        default: 
            return state
    }
}

