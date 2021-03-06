const express = require('express')
const redis = require('redis')
const process = require('process')
const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.set('visits',0)

app.get('/getCount',(req,res)=> {
//    process.exit(0)
    client.get('visits',(err, visits)=>{
        res.send('Number of visits :'+visits)
        client.set('visits',parseInt(visits)+1)
    })
//console.log('Request is coming')
//res.send('Hello there')
})

app.listen(8081,()=>{
    console.log ('Hello listening to port 8081')
})
