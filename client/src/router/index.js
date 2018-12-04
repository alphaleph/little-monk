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
      component: TheWelcome
    },
    {
      path: '/posts',
      name: 'PostsList',
      component: ThePostsList
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: TheNewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: TheEditPost
    }
  ]
})
