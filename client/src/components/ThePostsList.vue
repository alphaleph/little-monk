<template>
  <div class="posts-list">
    <h1>Posts</h1>
    <div
      v-if="posts.length > 0"
      class=table-wrap
    >
      <div>
        <router-link
          :to="{ name: 'NewPost' }"
          class=""
        >
          Add Post
        </router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr 
          v-for="(post) in posts"
          :key="post._id"
        >
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link
              :to="{ name: 'EditPost', params: { id: post._id } }"
            >
              Edit
            </router-link>
            <a 
              href="#"
              @click="deletePost(post._id)"
            >
              Delete
            </a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts yet.
      <br/>
      <br/>
      <router-link
        :to="{ name: 'NewPost' }"
        class="add_post_link"
      >
        Add Post
      </router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'PostsList',
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
    },
    async deletePost (id) {
      const answer = window.confirm('Are you sure you want to delete this post?')
      if (answer) {
      await PostsService.deletePost(id)
      this.getPosts()
        window.alert('Your post will be deleted.')
      }
    }
  }
}
</script>

<style scoped type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  table th, table tr {
    text-align: left;
  }
  table thead {
    background: #f2f2f2;
  }
  table tr td {
    padding: 10px;
  }
  table tr:nth-child(odd) {
    background: #f2f2f2;
  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }
  a {
    color: #4d7ef7;
    text-decoration: none;
  }
  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>