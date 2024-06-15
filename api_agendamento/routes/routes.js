const express = require ('express')
const path = require('path')
const patientController = require('../controllers/patientController')
const doctorController = require('../controllers/doctorController')


const router = express.Router()


router.get('/Allpatient', patientController.showAll)
router.get('/patient/:id', patientController.show)
router.post('/patient', patientController.create)
router.put('/patient/:id', patientController.update)
router.delete('/patient/:id', patientController.delete)

router.get('/Alldoctor', doctorController.showAll)
router.get('/doctor/:id', doctorController.show)
router.post('/doctor', doctorController.create)
router.put('/doctor/:id', doctorController.update)
router.delete('/doctor/:id', doctorController.delete)



// ultima Rota 404
router.use(function (req, res, next){
    //res.status(404).send("Erro404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})
module.exports = router