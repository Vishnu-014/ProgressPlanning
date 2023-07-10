const express = require('express')
const progressController = require('../controllers/progress-controller')

const route = express.Router();

route.post('/', progressController.createProgress)
route.get('/', progressController.getProgress)
route.patch('/boardprogress/:bid', progressController.updateBoardProgress)

module.exports = route;