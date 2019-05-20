let messages = [];
let id = 0;

const newMessage = (req, res)=>{
    const {text, time}= req.body;
    
    messages.push({id, text, time});
    id++;
    res.json(messages)
};
const readMessage = (req, res)=>{
    res.json(messages);
};
const editMessage = (req, res)=>{
    const {text} = req.body;
    const updatedID = +req.params.id;
    const i = messages.findIndex(message => message.id == updateID);
    let message = messages[i];
    
    messages[i] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    }
    res.json(messages)
};
const deleteMessage = (req, res)=>{
    const deleteID = req.params.id;

    i = messages.findIndex(message => message.id == deleteID);
    messages.splice(i, 1);
    res.json(messages);
}

module.exports = {
    newMessage, readMessage, editMessage, deleteMessage
}