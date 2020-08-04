import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/spells',
    name: 'Spells',
    component: () => import(/* webpackChunkName: "spells" */ '../views/Spells.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/map',
    name: 'Maps',
    component: () => import(/* webpackChunkName: "maps" */ '../views/Maps.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import(/* webpackChunkName: "story" */ '../views/Story.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: () => import(/* webpackChunkName: "monsters" */ '../views/Monsters.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const tokenInStorage = localStorage.getItem("Authorization");
    if (tokenInStorage) {
      store.state.loggedIn = true;
    }
    if (!store.state.loggedIn) {
      next({
        path: "/login",
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
