import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home"
import Editor from "../components/Editor";
import Article from "../components/Article";
import Login from "../components/manage/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/writer',
    component: Editor
  },
  {
    path: '/article/:id',
    component: Article
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
