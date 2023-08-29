//! Events Routes
const express = require('express');
const router = express.Router({ mergeParams: true });
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const errorHandler = require('../utils/error-handlers/errorHandler');

//* Import Controllers
const events = require('../controllers/events.js');

//* Import Validations
const {
  imageUploadValidation,
  eventValidation,
} = require('../utils/middleware/joiValidations');

//* Import Middleware
const isLoggedIn = require('../utils/middleware/isLoggedIn.js');
//TODO Don't forget to put isLoggedIn back into the router "/" post
router
  .route('/')
  .get(events.index)
  .post(
    upload.single('eventImage'),
    errorHandler.handleCloudinaryError,
    imageUploadValidation,
    eventValidation,
    events.createEvent
  );

//TODO WRITE VALIDATIONS FOR THIS
router.route('/create-checkout-session').post(events.handleCheckout);

module.exports = router;
