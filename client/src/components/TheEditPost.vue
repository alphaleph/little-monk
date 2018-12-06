<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input 
          type="text"
          name="title"
          placeholder="TITLE"
          v-model="title"
        >
      </div>
      <div>
        <textarea 
          rows="15"
          cols="15"
          placeholder="DESCRIPTION"
          v-model="description"
        >
        </textarea>
      </div>
      <div>
        <button 
          class="app_post_btn"
          @click="updatePost"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'EditPost',
  data () {
    return {
      title: '',
      description: '',
      originalTitle: '',
      originalDescription: '',
      isSubmitted: false
    }
  },
  mounted () {
    this.getPost()
  },
  beforeRouteUpdate (to, from, next) {
    this.getPost()
    next()
  },
  beforeRouteLeave (to, from, next) {
    if (this.isSubmitted || (this.title === this.originalTitle && this.description === this.originalDescription)) {
      next()
    } else {
      const answer = window.confirm('Do you really want to leave? You have unsaved changes.')
      if (!answer) {
        next(false)
      } else {
        next()
      }
    }
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.originalTitle = this.title
      this.description = response.data.description
      this.originalDescription = this.description
    },
    async updatePost () {
      if (this.title.trim().length > 0 && this.description.trim().length > 0) {
      await PostsService.updatePost({
        id: this.$route.params.id,
          title: this.title.trim(),
          description: this.description.trim()
      })
        this.isSubmitted = true
        this.$router.push({name: 'PostsList'})
      } else {
        window.alert('Post title and content fields cannot be empty.')
      }
    }
  }
}
</script>

<style type="text/css" scoped>
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px
  }
  .form div {
    margin: 20px;
  }
  .app_post_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
