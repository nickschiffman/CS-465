var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"],
});
const ctrlMain = require('../controllers/main');
const authController = require('../controllers/authentication');
const tripsController = require('../contollers/trips');

router
    .route('/login')
    .post(authController.login);


router
    .route('/register')
    .post(authController.register);

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
