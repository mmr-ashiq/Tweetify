const { TweetRepository } = require('../repository/index');

class TweetService {
  constructor() {
    this.TweetRepository = new TweetRepository();
  }

  async create(data){
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1));
    // data.tags = tags;
    const tweet = await this.TweetRepository.createTweet(data);
    
    return tweet;
  }
}

module.exports = TweetService;