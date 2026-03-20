const RoadmapSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate"
  },

  content: [
    {
      title: String,
      tasks: [
        {
          title: String,
          completed: { type: Boolean, default: false }
        }
      ]
    }
  ],

  aiConfidence: Number,

  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  },

  feedback: String,

  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

module.exports = mongoose.model("Roadmap", RoadmapSchema);