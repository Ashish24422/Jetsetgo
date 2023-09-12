const express = require('express');
const router = express.Router();
const ctrlLocations =require('D:/21eg106b22/wpm/jetsetgo/app_server/controllers/location');
const ctrlOthers = require('D:/21eg106b22/wpm/jetsetgo/app_server/controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;