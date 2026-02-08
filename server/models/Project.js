const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  titleHA: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    trim: true
  },
  images: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['Education', 'Infrastructure', 'Social Welfare', 'Economic Empowerment', 'Healthcare', 'Agriculture', 'Water', 'Empowerment', 'Youth Empowerment', 'Other', 'Security', 'Community', 'Political']
  },
  imageUrl: {
    type: String,
    trim: true
  },
  impact: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },

  videoEmbedLink: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Planned', 'Ongoing', 'Completed', 'Cancelled'],
    default: 'Planned'
  },
  year: {
    type: String,
    required: false
  },
  priority: {
    type: Number,
    default: 0 // For sorting projects
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);