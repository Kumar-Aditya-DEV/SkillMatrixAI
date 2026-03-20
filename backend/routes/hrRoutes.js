const express = require('express');
const router = express.Router();
const { getHRDashboard, uploadResume } = require('../controllers/hrController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/dashboard')
  .get(protect, authorize('HR'), getHRDashboard);

router.route('/upload')
  .post(protect, authorize('HR'), uploadResume);

module.exports = router;
