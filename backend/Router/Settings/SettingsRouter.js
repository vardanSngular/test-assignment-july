const express = require('express')
const fs = require('fs')

const router = express.Router()

router.use('/', (req, res) => {
  try {
    const settingsJson = fs.readFileSync('./db/Settings.json')

    return res.status(200).json(JSON.parse(settingsJson))
  } catch (err) {
    return res.status(500).json({ message: err })
  }
})

module.exports = router
