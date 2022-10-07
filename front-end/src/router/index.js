import Vue from 'vue'
import VueRouter from 'vue-router';
import Cadastro from '../views/Cadastro.vue'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'

Vue.use(VueRouter);

const routes = [
  {
    name: 'Cadastro',
    component: Cadastro,
    path: '/cadastro'
  },
  {
      name: 'Home',
      component: Home,
      path: '/'
  },
  {
    name: 'Quiz',
    component: Quiz,
    path: '/quiz'
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