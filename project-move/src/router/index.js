import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/register/register';
import Test from '@/components/Test';
import Login from '@/components/Login';
import Center from '@/myCenter/myCenter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    }
  ]
});
