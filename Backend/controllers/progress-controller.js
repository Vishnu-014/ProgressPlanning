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

exports.createProgress = createProgress;
exports.getProgress = getProgress;
exports.updateBoardProgress = updateBoardProgress;