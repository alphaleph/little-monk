<template>
  <div class="container-main">
    <div class="backdrop"></div>
    <md-progress-bar class="md-primary" :md-value="100"></md-progress-bar>
    <h1 class="md-display-1 title-postslist">Posts</h1>
    <div class="container-button">
      <md-button
        class="md-accent md-raised button-create"
        :to="{ name: 'NewPost' }"
      >
        Add Post
      </md-button>
    </div>
    <div
      v-if="posts.length"
      class="container-table"
    >
      <md-table class="md-primary md-fixed-header">
        <md-table-row>
          <md-table-head>Title</md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
        <md-table-row
          v-for="post in posts"
          :key="post._id"
        >
          <md-table-cell>
            {{ infoStub(post.title) }}
          </md-table-cell>
          <md-table-cell>
            {{ infoStub(post.description) }}
          </md-table-cell>
          <md-table-cell>
            <md-button
              class="md-dense md-raised md-icon-button button-edit"
              :to="{ name: 'EditPost', params: { id: post._id } }"
            >
              <edit-icon/>
            </md-button>
            <md-button
              class="md-dense md-raised md-icon-button button-delete"
              @click="deletePost(post._id)"
            >
              <delete-icon/>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <div
      v-else
      class="container-empty-state">
      <md-empty-state
        md-icon="home"
        md-label="The Collection is empty."
        md-description="Please create a Post to make it a little cozier...">
      </md-empty-state>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import EditIcon from '@/assets/edit.svg'
import DeleteIcon from '@/assets/trash-alt.svg'

export default {
  name: 'PostsList',
  data () {
    return {
      posts: []
    }
  },
  components: {
    'edit-icon': EditIcon,
    'delete-icon': DeleteIcon
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
    },
    infoStub: function (postInfo) {
      return (postInfo.length < 25) ? postInfo : postInfo.slice(0, 25) + '...'
    }
  }
}
</script>

<style scoped type="text/css">
.container-main {
  height: 100%;
  position: relative;
  z-index: 1;
}
.backdrop {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  position: absolute;
  left: 10%;
  background-color: #fafafa;
  z-index: -10;
  box-shadow: 0px 0px 8px 0px #b3b3b3;
}

.title-postslist {
  text-align: center;
  background-color: #cfd8dc;
  border-bottom: .1em solid #9ea7aa;
  padding: 2% 0% 2% 0%;
  margin-top: 0%;
  margin-bottom: 0%;
  font-weight: bold;
  color: black;
}
.container-table {
  width: 60%;
  margin: 0 auto;
  text-align: center;
  max-height: 70%;
  overflow: auto;
}
.container-button {
  text-align: center;
}
.button-create {
  margin: 2em;
}
.container-empty-state {
  max-height: 60%;
}
table th, table tr {
  text-align: left;
}
table tr td {
  padding: .1em;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #c62828;
}
</style>
