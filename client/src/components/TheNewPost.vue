<template>
  <div class="container-main">
    <md-progress-bar class="md-primary" :md-value="100"></md-progress-bar>
    <h1 class="md-display-1 title-create-post">
      Add Post
    </h1>
    <div class="container-form">
      <p class="md-caption caption-require">
        (*) denotes required fields
      </p>
      <div>
        <md-field :class="errorTitle">
        <label>Enter Title</label>
        <md-input :required="true" v-model="title" @input=toggleErrorTitle></md-input>
        <span class="md-error">Title cannot be empty.</span>
        </md-field>
      </div>
      <div>
        <md-field :class="errorContent">
          <label>Enter Content</label>
          <md-textarea :required="true" v-model="description" @input=toggleErrorDescription></md-textarea>
          <span class="md-error">Content cannot be empty.</span>
        </md-field>
      </div>
      <div class="container-buttons">
        <md-button
          class="md-primary md-raised"
          :to="{ name: 'PostsList' }"
          >Cancel</md-button>
        <md-button
          class="md-accent md-raised"
          @click="addPost"
        >
          Submit
        </md-button>
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
      isSubmitted: false,
      titleError: false,
      contentError: false
    }
  },
  computed: {
    errorTitle () {
      return {
        'md-invalid': this.titleError
      }
    },
    errorContent () {
      return {
        'md-invalid': this.contentError
      }
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
        if (this.title.trim().length === 0) {
          this.titleError = true
        }
        if (this.description.trim().length === 0) {
          this.contentError = true
        }
      }
    },
    toggleErrorTitle () {
      this.titleError = false
    },
    toggleErrorDescription () {
      this.contentError = false
    }
  }
}
</script>

<style scoped>
.container-main {
  height: 100%;
  position: relative;
  z-index: 1;
  text-align: center;
}
.title-create-post {
  font-weight: bold;
  color: black;
  margin: 2em;
}
.container-form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: left;
}
.caption-require {
  text-align: right;
}
.container-buttons {
  text-align: right;
}
.container-buttons .md-button {
  margin: .5em;
  margin-left: 2em;
}
</style>
