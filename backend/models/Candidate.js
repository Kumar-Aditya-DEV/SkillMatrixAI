const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide candidate name']
  },
  email: {
    type: String,
    required: [true, 'Please provide candidate email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  roleApplied: {
    type: String,
    default: 'Unspecified'
  },
  matchScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    enum: ['PENDING', 'IN REVIEW', 'IN_PROGRESS', 'IN TRAINING', 'APPROVED', 'REJECTED', 'COMPLETED'],
    default: 'PENDING'
  },
  statusHistory: [
    {
      status: String,
      date: { type: Date, default: Date.now }
    }
  ],
  resumePath: {
    type: String
  },
  aiInsight: {
    type: String
  },
  assignedTrainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  roadmapId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roadmap'
  }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
