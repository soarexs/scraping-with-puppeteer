const express = require('express')
const routes = require('./routes/data.router')
class App {
    constructor() {
        this.app = express()
    }
    routes() {
        this.app.use(routes)
    }
    listen(PORT, message){
        this.app.listen(PORT, () => console.log(message))
    }
}

module.exports = App