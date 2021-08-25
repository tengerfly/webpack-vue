import VueRouter from "vue-router";
import Home from "@view/home"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: ()=> import('@view/about'),
  }
]

export default new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})