const Autos = require('../models/autos.model')

exports.getAllAutos = async (req, res) => {
  await Autos.find({}, (err, autos) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!autos.length) {
          return res
              .status(404)
              .json({ success: false, error: `autos not found` })
      }
      return res.status(200).json({ success: true, data: autos })
  }).catch(err => console.log(err))
}