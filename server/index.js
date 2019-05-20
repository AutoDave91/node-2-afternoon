const express = require('express');
const app = express();
const messages_controler = require('./controllers/messages_controler');

app.use(express.json());

app.get('/api/messages', messages_controler.readMessage)
app.post('/api/messages', messages_controler.newMessage)
app.put('/api/messages/:id', messages_controler.editMessage)
app.delete('/api/messages/:id', messages_controler.deleteMessage)


app.listen(3001, ()=>{
    console.log('Listening')
})