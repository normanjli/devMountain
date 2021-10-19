const { application } = require("express")
const houses = require(`./db.json`)
let globalID = 4

module.exports = {
    getHouses: (req,res)=>{
        res.status(200).send(houses)
    },
    deleteHouse: (req,res)=>{
        const {id} = req.params
        let index = houses.findIndex(house=>house.id=== +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req,res)=>{
        let {address, price,imageURL} = req.body
        let newHouse = {
            id:globalID,
            address:address,
            price:price,
            imageURL:imageURL
        }
        houses.push(newHouse)
        globalID++
        res.status(200).send(houses)
    },
    updateHouse: (req,res)=>{
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(house=>house.id === +id)
        if (type === `plus`){
            houses[index].price +=10000
            res.status(200).send(houses)
        }else if(type ===`minus`& houses[index].price>0){
            houses[index].price -=10000
            if(houses[index].price< 0){
                houses[index].price = 0
            }
            res.status(200).send(houses)
        }else{
            res.status(400).send(`its broke yo`)
        }
    },
    changeImg: (req,res)=>{
        let {id} = req.params
        console.log(id)
        console.log(req.body)
        let {img} = req.body
        console.log(img)
        let index = houses.findIndex(house=>house.id === +id)
        houses[index].imageURL = img
        res.status(200).send(houses)
    }
}