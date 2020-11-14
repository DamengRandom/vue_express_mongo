import axios from 'axios';

const url = 'http://localhost:4932/api/posts';

class postService {
  // Get posts
  static getPosts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const { data } = res;
        resolve(data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        })));
      } catch(error) {
        reject(error);
      }
    });
  }
  // Create post
  static insertPost(text) {
    try {
      return axios.post(url, { text });
    } catch(error) {
      console.log(error);
    }
  }
  // Delete post
  static deletePost(id) {
    try {
      return axios.delete(`${url}/${id}`);
    } catch(error) {
      console.log(error);
    }
  }
}

export default postService;
