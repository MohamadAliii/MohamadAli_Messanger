export const saveUsername = (name) => ({
    payload: name ,
    type: 'SAVE_USERNAME'
})                     

export const saveNewMessage = (newMessage) => ({
    payload: newMessage ,
    type: 'SAVE_NEW_MESSAGE'
})