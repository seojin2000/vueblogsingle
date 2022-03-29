
import { createWebHistory, createRouter } from "vue-router";
import list from './components/ListBanner.vue';
import home from './components/HomePage.vue';
import detail from './components/DetailPage.vue';
const routes = [
  {
    path: "/list",
    component:list,
    children:[
        {
            path: "/author",
            component: Aouther.vue,
        },
    ]
  },

  {
      path: "/",
      component: home,
  },
  {
      path: "/detail/:id",
      component: detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 