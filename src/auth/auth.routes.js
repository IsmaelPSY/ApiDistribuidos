const router = require('express').Router()
const http = require('./auth.http')

router
  .route('/login')
  .post(
    http.loginUser
  );
router
  .route('/singin')
  .post(
    http.postUser
  );

module.exports = {
  router,
};