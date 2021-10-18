const express = require(`express`)
const app = express()
const cors = require(`cors`)
app.use(express.json())
app.use(cors())

app.get(`/api/users`,(req,res)=>{
    let friends= ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

app.get(`/weather/:temperature`,(req,res)=>{
    if(isNaN(+req.params.temperature)===false){
        if (+req.params.temperature>69){
            let phrase = `<h3>${req.params.temperature}degrees. It was hot today</h3>`
            res.status(200).send(phrase)
        }else if(+req.params.temperature<69){
            let phrase = `<h3>${req.params.temperature} degrees. It was cold today</h3>`
            res.status(200).send(phrase)  
        }else{
            res.status(200).send(`<h3>nice</h3>`)
        }
    }else{
        res.status(200).send(`<h3>It was ${req.params.temperature} today`)
    }
})
app.listen(4000,()=>console.log(`listening on 4000`))