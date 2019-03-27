import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import Post from './views/Post.vue'
import AddPost from './views/AddPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: AddPost
    },
  ]
})
