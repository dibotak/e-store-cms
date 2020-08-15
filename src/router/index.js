import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import FormAdd from '../views/FormAdd.vue';
import ProductList from '../views/ProductList.vue';
import FormEdit from '../views/FormEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) next({ name: 'Dashboard' });
      else next();
    },
  },
  {
    path: '/dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) next();
      else next({ name: 'Login' });
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: ProductList,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('access_token')) next();
          else next({ name: 'Login' });
        },
      },
      {
        path: 'add',
        name: 'FormAdd',
        component: FormAdd,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('access_token')) next();
          else next({ name: 'Login' });
        },
      },
      {
        path: 'edit/:id',
        name: 'FormEdit',
        component: FormEdit,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('access_token')) next();
          else next({ name: 'Login' });
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) next({ name: 'Dashboard' });
      else next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
