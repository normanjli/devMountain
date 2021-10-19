const express = require(`express`)
const app = express()
const cors = require(`cors`)
const ctrl = require(`./controller`)
app.use(express.json())
app.use(cors())

app.get(`/api/houses`, ctrl.getHouses)
app.post(`/api/houses/`,ctrl.createHouse)
app.delete(`/api/houses/:id`,ctrl.deleteHouse)
app.put(`/api/houses/:id`,ctrl.updateHouse)
app.put(`/api/houses/img/:id`,ctrl.changeImg)

app.listen(4004,()=>console.log(`listening on 4004`))