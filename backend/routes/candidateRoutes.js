const express = require('express');
const router = express.Router();
const { getDashboardData, addCandidate } = require('../controllers/candidateController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/dashboard')
  .get(protect, authorize('HR'), getDashboardData);

router.route('/candidates')
  .post(protect, authorize('HR'), addCandidate);

module.exports = router;
