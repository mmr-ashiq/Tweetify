import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: [50, 'Hashtag is too long'],
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
        },
    ],
  },
  { timestamps: true }
);

const HashTag = mongoose.model('HashTag', hashtagSchema);
module.exports = HashTag;