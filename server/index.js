const express=require('express');
const cors=require('cors');
const twilio=require('twilio');
const accountSid='AC4d8fa25a7703ca086ed51cbb3a438f23';
const authToken='ec3ac43d391baa67334dd9c2e92cfe72';
const client=(accountSid,authToken);
const app=express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Welcome to the server')
})
app.get('/send-text',(req,res)=>{
    const {recipient,textmessage}=req.query
    client.messages.create({
        body:textmessage,
        to:"+83"+ recipient,
        from:'+15076045923'
    }).then((message)=>console.log(message.body));
})
app.listen(4000,()=>console.log("Running on port 4000"));

