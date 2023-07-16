const express = require('express')
const progressController = require('../controllers/progress-controller')

const route = express.Router();

route.post('/', progressController.createProgress)
route.get('/', progressController.getProgress)
route.patch('/boardprogress/:bid', progressController.updateBoardProgress)
route.patch('/designprogress/:did', progressController.updateDesignProgress)
route.patch('/plateprogress/:pid', progressController.updatePlateProgress)
route.patch('/printprogress/:pid', progressController.updatePrintProgress)
route.patch('/varnishprogress/:vid', progressController.updateVarnishProgress)
route.patch('/screenpreparationprogress/:sid', progressController.updatescreenPreparationProgress)
route.patch('/laminationprogress/:lid', progressController.updateLaminationProgress)
route.patch('/uvprogress/:uid', progressController.updateUvProgress)
route.patch('/foilprogress/:fid', progressController.updateFoilProgress)
route.patch('/pastingprogress/:pid', progressController.updatePastingProgress)
route.patch('/embossprogress/:eid', progressController.updateEmbossProgress)
route.patch('/diecut/:tid', progressController.updateDieCuttingProgress)
route.patch('/eyelet/:eid', progressController.updateEyeletProgress)
route.patch('/tape/:tid', progressController.updateTapeProgress)
route.patch('/packing/:pid', progressController.updatePackingProgress)


module.exports = route;