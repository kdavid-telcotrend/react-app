const Motors = require('../models/motors.model')

exports.getAllMotors = async (req, res) => {
  await Motors.find({}, (err, motors) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!motors.length) {
          return res
              .status(404)
              .json({ success: false, error: `motor not found` })
      }
      return res.status(200).json({ success: true, data: motors })
  }).catch(err => console.log(err))
}