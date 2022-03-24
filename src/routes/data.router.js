const Router = require('express')
const router = Router()
const scrapped = require('../data/scrapped.json')

var path = `${__dirname + '/public/index.html'}`
const filePath = path.replace('routes', '')

router.get('/', (req, res) => {
    res.sendFile(filePath)
})
router.post('/data', (req, res) => {
    res.status(200).send(scrapped)
})

module.exports = router