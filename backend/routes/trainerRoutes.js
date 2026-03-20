const express = require("express");
const router = express.Router();

const {
  getDashboard,
  reviewRoadmap,
  getCandidates,
  getCandidateDetails,
  completeTraining
} = require("../controllers/trainerController");

const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, authorize('trainer'), getDashboard);
router.post("/roadmap/:id/review", protect, authorize('trainer'), reviewRoadmap);
router.get("/candidates", protect, authorize('trainer'), getCandidates);
router.get("/candidate/:id", protect, authorize('trainer'), getCandidateDetails);
router.post("/candidate/:id/complete", protect, authorize('trainer'), completeTraining);

module.exports = router;