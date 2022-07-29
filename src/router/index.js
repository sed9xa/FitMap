import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signin from '@/views/signin.vue'
import signup from '@/views/signup.vue'
import diary from '@/views/diary.vue'
import statistic from '@/views/statistic.vue'
import workouts from '@/views/workouts.vue'
import workout from '@/views/workout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/diary',
    name: 'diary',
    component: diary
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: statistic
  },
  {
    path: '/workouts',
    name: 'workouts',
    component: workouts
  },
  {
    path: '/workout/:id',
    name: 'workout',
    props: true,
    component: workout
  }
]

const router = new VueRouter({
  routes
})

export default router
