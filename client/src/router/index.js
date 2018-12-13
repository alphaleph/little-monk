import Vue from 'vue'
import Router from 'vue-router'
import TheWelcome from '@/components/TheWelcome'
import ThePostsList from '@/components/ThePostsList'
import TheNewPost from '@/components/TheNewPost'
import TheEditPost from '@/components/TheEditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: TheWelcome,
      meta: {
        title: 'Welcome - Little Monk'
      }
    },
    {
      path: '/posts',
      name: 'PostsList',
      component: ThePostsList,
      meta: {
        title: 'Entries List - Little Monk'
      }
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: TheNewPost,
      meta: {
        title: 'Create An Entry - Little Monk'
      }
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: TheEditPost,
      meta: {
        title: 'Edit An Entry - Little Monk'
      }
    }
  ]
})
