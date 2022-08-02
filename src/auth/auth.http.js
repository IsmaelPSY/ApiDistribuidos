const authControllers = require('./auth.controller');
const userControllers = require('../users/users.controller')
const jwt = require('jsonwebtoken')
const config = require('../config')
const { toPromise } = require('../utils/toPromise')

const postUser = async (req,res) => {
  const [user,err] = await toPromise(userControllers.registerUser(req.body))
  if(!req.body || err){
    res.status(400).json({ message: 'Data Missing' });
  }
  res.status(201).json(user)
}

const loginUser = async (req,res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Missing data' });
  } else if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Missing data' });
  }
  const [response, error] = await toPromise(
    authControllers.checkUsersCredential(req.body.email, req.body.password)
  );
  if (error || !response) {
    return res.status(401).json({ message: 'Invalid Credential' });
  }

  const [user, err] = await toPromise(
    userControllers.getUserByEmail(req.body.email)
  );

  if (err || !response) {
    return res.status(401).json({ message: 'Invalid Credential' });
  }

  const token = jwt.sign(
    {
        id: user.uuid,
        email: req.body.email,
    },
    config.jwtSecret
  );
  console.log('Estoy enviando el otken')
  res.status(200).json({ token: token , user: user.uuid});
}

module.exports = {
  loginUser,
  postUser
};
