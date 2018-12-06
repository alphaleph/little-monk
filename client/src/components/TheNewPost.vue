<template>
  <div class="posts">
    <h1>Add Post</h1>
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
          cols="30"
          rows="10"
          placeholder="DESCRIPTION"
          v-model="description"
        >
        </textarea>
      </div>
      <div>
        <button
          class="app_post_btn"
          @click="addPost"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: '',
      isSubmitted: false
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.isSubmitted || (this.title.trim().length === 0 && this.description.trim().length === 0)) {
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
    async addPost () {
      if (this.title.trim().length > 0 && this.description.trim().length > 0) {
        await PostsService.addPost({
          title: this.title.trim(),
          description: this.description.trim()
        })
        this.isSubmitted = true
        this.$router.push({ name: 'PostsList' })
      } else {
        window.alert('Post title and content fields cannot be empty.')
      }
    }
  }
}
</script>

<style scoped>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
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
