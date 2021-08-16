const express = require('express')
const router = express.Router()
const request = require('request')
const { response } = require('express')

const baseUrl = "http://35.207.169.147"

const verifyLogin = (req, res, next) => {
  const reqBody = req.body;
  request({
    url: `${baseUrl}/auth`,
    method: 'POST',
    qs: JSON.stringify(reqBody),
    json: { "email": req.body.email, "password": req.body.password}
  }, (error, response, body) => {
    res.send(body)
  })
}

router.post('/auth', verifyLogin) // get token from login

const getRcaeResults = (req, res, next) => {
  const reqBody = req.body;
  const authorization = req.get('Authorization')
  request({
    url: `${baseUrl}/results`,
    headers: { 'Authorization': authorization},
    method: 'GET',
  }, (error, response, body) => {
    if (error) {
      res.send(error)
    } else {
      res.send(body)
    }
  })
}

router.get('/results', getRcaeResults) // get horse race status

module.exports = router