<template>
  <div class="container">
    <h3>Latest Posts</h3>
    <!-- Create post here -->
    <div class="create-post">
      <label for="create-post">Say something ..</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post .." />
      <button @click="newPost">Post</button>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        :item="post"
        :index="index"
        :key="post._id"
        v-on:dblclick="removePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="text">
          {{ post.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import postService from '../utils/postService';
export default {
  
  name: 'Posts',
  data() { // component state
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await postService.getPosts();
    } catch(error) {
      this.error = error.message;
    }
  },
  methods: {
    async newPost() {
      try {
        await postService.insertPost(this.text);
        this.posts = await postService.getPosts();
      } catch(error) {
        console.log('(client) add new post error: ', error);
      }
    },
    async removePost(id) {
      try {
        await postService.deletePost(id);
        this.posts = await postService.getPosts();
      } catch(error) {
        console.log('(client) delete post error: ', error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
