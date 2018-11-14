<template>
  <div class="posts-list">
    <h1>Posts</h1>
    This file will list all of the posts.
    <div v-for="(post, index) in posts" :key="post._id">
      <h3>{{ index }}. {{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    }
  }
}
</script>
