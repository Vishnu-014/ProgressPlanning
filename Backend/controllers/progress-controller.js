const HttpError = require('../models/http-error')
const Progress = require('../models/progress')


const createProgress = async (req, res, next) => {
  const { name,
    orderNo,
    mtType,
    fb,
    date,
    orderQuantity,
    sampleBulk,
    tagBox,
    boardPurchase,
    boardType,
    boardSize,
    boardQuantity,
    design,
    designOldNew,
    plate,
    plateOldNew,
    plateOld,
    printt,
    printType,
    varnish,
    screenPreparation,
    lamination,
    laminationType,
    uv,
    emboss,
    foil,
    pasting,
    dieCutting,
    dieCuttingNewOld,
    dieCuttingOld,
    eyelet,
    eyeletYes,
    tape,
    tapeYes,
    packing,
    boardPurchaseCDate,
    designCDate,
    plateCDate,
    printCDate,
    varnishCDate,
    screenPreparationCDate,
    laminationCDate,
    uvCDate,
    foilCDate,
    pastingCDate,
    embossCDate,
    dieCuttingCDate,
    eyeletCDate,
    tapeCDate,
    packingCDate,
    boardPurchaseProgress,
    designProgress,
    plateProgress,
    printProgress,
    varnishProgress,
    laminationProgress,
    uvProgress,
    foilProgress,
    pastingProgress,
    embossProgress,
    dieCuttingProgress,
    eyeletProgress,
    tapeProgress,
    packingProgress,
    screenPreparationProgress } = req.body;
  console.log(name);

  const createProgress = new Progress({
    name,
    orderNo,
    mtType,
    fb,
    date,
    orderQuantity,
    sampleBulk,
    tagBox,
    boardPurchase,
    boardType,
    boardSize,
    boardQuantity,
    design,
    designOldNew,
    plate,
    plateOldNew,
    plateOld,
    printt,
    printType,
    varnish,
    screenPreparation,
    lamination,
    laminationType,
    uv,
    emboss,
    foil,
    pasting,
    dieCutting,
    dieCuttingNewOld,
    dieCuttingOld,
    eyelet,
    eyeletYes,
    tape,
    tapeYes,
    packing,
    boardPurchaseCDate,
    designCDate,
    plateCDate,
    printCDate,
    varnishCDate,
    screenPreparationCDate,
    laminationCDate,
    uvCDate,
    foilCDate,
    pastingCDate,
    embossCDate,
    dieCuttingCDate,
    eyeletCDate,
    tapeCDate,
    packingCDate,
    boardPurchaseProgress,
    designProgress,
    plateProgress,
    printProgress,
    varnishProgress,
    laminationProgress,
    uvProgress,
    foilProgress,
    pastingProgress,
    embossProgress,
    dieCuttingProgress,
    eyeletProgress,
    tapeProgress,
    packingProgress,
    screenPreparationProgress,
  });

  try {
    await createProgress.save();
  } catch (err) {
    const error = new HttpError(
      'item failed to add, please try again later.',
      500
    );
    console.log(err);
    return next(error);
  }
  res.status(201).json({ message: 'Item added', name });
}

const getProgress = async (req, res, next) => {

  let progressList;
  try {
    progressList = Progress.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching user failed, please try again later',
      500
    );
    return next(error);
  }
  res.json({ Progress: (await progressList).map((list) => list.toObject({ getters: true })) });
}

const updateBoardProgress = async (req, res, next) => {

  const { boardPurchaseProgress, boardPurchaseCDate } = req.body;
  const boardProgressID = req.params.bid;

  let progressList;
  try {
    progressList = await Progress.findById(boardProgressID);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.boardPurchaseProgress = boardPurchaseProgress;
  progressList.boardPurchaseCDate = boardPurchaseCDate;

  try {
    await progressList.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ boardProgressUpdated: progressList.toObject({ getters: true }), boardProgressID });
}

const updateDesignProgress = async (req, res, next) => {

  const { designProgress, designCDate } = req.body;
  const designProgressID = req.params.did;

  let progressList;
  try {
    progressList = await Progress.findById(designProgressID);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.designProgress = designProgress;
  progressList.designCDate = designCDate;

  try {
    await progressList.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ designProgressUpdated: progressList.toObject({ getters: true }), designProgressID });
}


const updatePlateProgress = async (req, res, next) => {

  const { plateProgress, plateCDate } = req.body;
  const plateProgressID = req.params.pid;

  let progressList;
  try {
    progressList = await Progress.findById(plateProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.plateProgress = plateProgress;
  progressList.plateCDate = plateCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ plateProgressUpdated: progressList.toObject({ getters: true }), plateProgressID });
}

const updatePrintProgress = async (req, res, next) => {

  const { printProgress, printCDate } = req.body;
  const printProgressID = req.params.pid;

  let progressList;
  try {
    progressList = await Progress.findById(printProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.printProgress = printProgress;
  progressList.printCDate = printCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ printProgressUpdated: progressList.toObject({ getters: true }), printProgressID });
}

const updateVarnishProgress = async (req, res, next) => {

  const { varnishProgress, varnishCDate } = req.body;
  const varnishProgressID = req.params.vid;

  let progressList;
  try {
    progressList = await Progress.findById(varnishProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.varnishProgress = varnishProgress;
  progressList.varnishCDate = varnishCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ varnishProgressUpdated: progressList.toObject({ getters: true }), varnishProgressID });
}

const updatescreenPreparationProgress = async (req, res, next) => {

  const { screenPreparationProgress, screenPreparationCDate } = req.body;
  const screenPreparationProgressID = req.params.sid;

  let progressList;
  try {
    progressList = await Progress.findById(screenPreparationProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.screenPreparationProgress = screenPreparationProgress;
  progressList.screenPreparationCDate = screenPreparationCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ screenPreparationProgressUpdated: progressList.toObject({ getters: true }), screenPreparationProgressID });
}

const updateLaminationProgress = async (req, res, next) => {

  const { laminationProgress, laminationCDate } = req.body;
  const laminationProgressID = req.params.lid;

  let progressList;
  try {
    progressList = await Progress.findById(laminationProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.laminationProgress = laminationProgress;
  progressList.laminationCDate = laminationCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ laminationProgressUpdated: progressList.toObject({ getters: true }), laminationProgressID });
}
const updateUvProgress = async (req, res, next) => {

  const { uvProgress, uvCDate } = req.body;
  const uvProgressID = req.params.uid;

  let progressList;
  try {
    progressList = await Progress.findById(uvProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.uvProgress = uvProgress;
  progressList.uvCDate = uvCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ uvProgressUpdated: progressList.toObject({ getters: true }), uvProgressID });
}

const updateFoilProgress = async (req, res, next) => {

  const { foilProgress, foilCDate } = req.body;
  const foilProgressID = req.params.fid;

  let progressList;
  try {
    progressList = await Progress.findById(foilProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.foilProgress = foilProgress;
  progressList.foilCDate = foilCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ foilProgressUpdated: progressList.toObject({ getters: true }), foilProgressID });
}

const updatePastingProgress = async (req, res, next) => {

  const { pastingProgress, pastingCDate } = req.body;
  const pastingProgressID = req.params.pid;

  let progressList;
  try {
    progressList = await Progress.findById(pastingProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.pastingProgress = pastingProgress;
  progressList.pastingCDate = pastingCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ pastingProgressUpdated: progressList.toObject({ getters: true }), pastingProgressID });
}

const updateEmbossProgress = async (req, res, next) => {

  const { embossProgress, embossCDate } = req.body;
  const embossProgressID = req.params.eid;

  let progressList;
  try {
    progressList = await Progress.findById(embossProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.embossProgress = embossProgress;
  progressList.embossCDate = embossCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ embossProgressUpdated: progressList.toObject({ getters: true }), embossProgressID });
}

const updateDieCuttingProgress = async (req, res, next) => {

  const { dieCuttingProgress, dieCuttingCDate } = req.body;
  const dieCuttingProgressID = req.params.tid;

  let progressList;
  try {
    progressList = await Progress.findById(dieCuttingProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.dieCuttingProgress = dieCuttingProgress;
  progressList.dieCuttingCDate = dieCuttingCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ dieCuttingProgressUpdated: progressList.toObject({ getters: true }), dieCuttingProgressID });
}

const updateEyeletProgress = async (req, res, next) => {

  const { eyeletProgress, eyeletCDate } = req.body;
  const eyeletProgressID = req.params.eid;

  let progressList;
  try {
    progressList = await Progress.findById(eyeletProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.eyeletProgress = eyeletProgress;
  progressList.eyeletCDate = eyeletCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ eyeletProgressUpdated: progressList.toObject({ getters: true }), eyeletProgressID });
}

const updateTapeProgress = async (req, res, next) => {

  const { tapeProgress, tapeCDate } = req.body;
  const tapeProgressID = req.params.tid;

  let progressList;
  try {
    progressList = await Progress.findById(tapeProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.tapeProgress = tapeProgress;
  progressList.tapeCDate = tapeCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ tapeProgressUpdated: progressList.toObject({ getters: true }), tapeProgressID });
}

const updatePackingProgress = async (req, res, next) => {

  const { packingProgress, packingCDate } = req.body;
  const packingProgressID = req.params.pid;

  let progressList;
  try {
    progressList = await Progress.findById(packingProgressID);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find Progress ID',
      500
    );
    return next(error);
  }

  progressList.packingProgress = packingProgress;
  progressList.packingCDate = packingCDate;

  try {
    await progressList.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update',
      500
    );
    return next(error);
  }
  res.status(200).json({ packingProgressUpdated: progressList.toObject({ getters: true }), packingProgressID });
}

exports.createProgress = createProgress;
exports.getProgress = getProgress;
exports.updateBoardProgress = updateBoardProgress;
exports.updateDesignProgress = updateDesignProgress;
exports.updatePlateProgress = updatePlateProgress;
exports.updatePrintProgress = updatePrintProgress;
exports.updateVarnishProgress = updateVarnishProgress;
exports.updatescreenPreparationProgress = updatescreenPreparationProgress;
exports.updateLaminationProgress = updateLaminationProgress;
exports.updateUvProgress = updateUvProgress;
exports.updateFoilProgress = updateFoilProgress;
exports.updatePastingProgress = updatePastingProgress;
exports.updateEmbossProgress = updateEmbossProgress;
exports.updateDieCuttingProgress = updateDieCuttingProgress;
exports.updateEyeletProgress = updateEyeletProgress;
exports.updateTapeProgress = updateTapeProgress;
exports.updatePackingProgress = updatePackingProgress;
