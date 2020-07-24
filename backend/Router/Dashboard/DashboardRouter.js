const express = require('express')
const fs = require('fs')

const router = express.Router()

router.use('/', (req, res) => {
  try {
    const dashboardJson = fs.readFileSync('./db/Dashboard.json')

    return res.status(200).json(JSON.parse(dashboardJson))
  } catch (err) {
    return res.status(500).json({ message: err })
  }
})

module.exports = router
