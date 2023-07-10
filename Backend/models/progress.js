const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const progressSchema = new Schema({
  orderNo: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  mtType: {
    type: String,
    required: true,
  },
  fb: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  orderQuantity: {
    type: Number,
    default: 0,
  },
  sampleBulk: {
    type: String,
  },
  tagBox: {
    type: String,
  },
  boardPurchase: {
    type: String,
  },
  boardType: {
    type: String,
  },
  boardSize: {
    type: String,
  },
  boardQuantity: {
    type: Number,
    default: 0,
  },
  design: {
    type: String,
  },
  designOldNew: {
    type: String,
  },
  plate: {
    type: String,
  },
  plateOldNew: {
    type: String,
  },
  plateOld: {
    type: String,
  },
  print: {
    type: String,
  },
  printType: {
    type: [{ value: String, label: String }],
  },
  varnish: {
    type: String,
  },
  screenPreparation: {
    type: String,
  },
  lamination: {
    type: String,
  },
  laminationType: {
    type: String,
  },
  uv: {
    type: String,
  },
  emboss: {
    type: String,
  },
  foil: {
    type: String,
  },
  pasting: {
    type: String,
  },
  dieCutting: {
    type: String,
  },
  dieCuttingNewOld: {
    type: String,
  },
  dieCuttingOld: {
    type: String,
  },
  eyelet: {
    type: String,
  },
  eyeletYes: {
    type: String,
  },
  tape: {
    type: String,
  },
  tapeYes: {
    type: String,
  },
  packing: {
    type: String,
  },
  boardPurchaseCDate: {
    type: String,
    default: ""
  },
  designCDate: {
    type: String,
    default: ""
  },
  plateCDate: {
    type: String,
    default: ""
  },
  printCDate: {
    type: String,
    default: ""
  },
  varnishCDate: {
    type: String,
    default: ""
  },
  screenPreparationCDate: {
    type: String,
    default: ""
  },
  laminationCDate: {
    type: String,
    default: ""
  },
  uvCDate: {
    type: String,
    default: ""
  },
  foilCDate: {
    type: String,
    default: ""
  },
  pastingCDate: {
    type: String,
    default: ""
  },
  embossCDate: {
    type: String,
    default: ""
  },
  dieCuttingCDate: {
    type: String,
    default: ""
  },
  eyeletCDate: {
    type: String,
    default: ""
  },
  packingCDate: {
    type: String,
    default: ""
  },
  boardPurchaseProgress: {
    type: String,
  },
  designProgress: {
    type: String,
  },
  plateProgress: {
    type: String,
  },
  printProgress: {
    type: String,
  },
  varnishProgress: {
    type: String,
  },
  laminationProgress: {
    type: String,
  },
  uvProgress: {
    type: String,
  },
  foilProgress: {
    type: String,
  },
  pastingProgress: {
    type: String,
  },
  embossProgress: {
    type: String,
  },
  dieCuttingProgress: {
    type: String,
  },
  eyeletProgress: {
    type: String,
  },
  tapeProgress: {
    type: String,
  },
  packingProgress: {
    type: String,
  },
  screenPreparationProgress: {
    type: String,
  },
},
  { timestamps: true }
);

module.exports = mongoose.model('Progress', progressSchema);