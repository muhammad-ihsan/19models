'use strict';
const RootController = require('../../common/controllers/RootController')

module.exports = app => {
  let router = app.loopback.Router()

  router.get('/', RootController.getHomePage.bind(RootController))

  router.get('/stage', (req, res) => {
    res.send('stage')
  })

  router.post('/stage', (req, res) => {
    res.send('post stage')
  })

  app.use(router)
}
