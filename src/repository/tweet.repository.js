import Tweet from '../models/tweet';

class TweetRepository {
  async createTweet(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getTweet(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async destroyTweet(id) {
    try {
      const tweet = await Tweet.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllTweets(offset, limit) {
    try {
      const tweets = await Tweet.find()
        .skip(offset)
        .limit(limit)
        .sort({ createdAt: -1 });
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
