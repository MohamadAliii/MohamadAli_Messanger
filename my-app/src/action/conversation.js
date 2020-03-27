export const saveUsername = (name) => ({
    type: 'SAVE_USERNAME',
    payload: name 
})                     

export const sendNewMessage = (newMessage) => ({
    type: 'SEND_NEW_MESSAGE',
    payload: newMessage 

})