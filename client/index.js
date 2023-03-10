const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port =  3000;
const {connection} = require('./utils/db')


//Render Index page
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/test', (req,res)=>{
     console.log('test api');
     return  res.send('Hello World!')
})

//Get username and roomname from form and pass it to room
app.post('/room', async (req, res) => {
    roomname = req.body.roomname;
    username = req.body.username;
       //mysql
    
    connection([username, roomname]);
    // Close the database connection
    
    res.redirect(`/room?username=${username}&roomname=${roomname}`)
  
})

//Rooms
app.get('/room', (req, res)=>{
    res.render('room')
})


//Start Server
const server = app.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`)
})

io = socket(server);
require('./utils/socket')(io);