import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [300, 'Tweet is too long'],
    },
    userEmail: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
