import Vue from 'vue'
import VueRouter from 'vue-router';
import Quiz from '../views/Quiz.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        name: 'Quiz',
        component: Quiz,
        path: '/quiz'
    },
    {
      name: 'Home',
      component: Home,
      path: '/'
  }
]

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    routes,
    scrollBehavior() {
      return window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  });

export default router