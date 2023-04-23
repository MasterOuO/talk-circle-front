import { createRouter, createWebHistory } from 'vue-router';
import Blog from '@/views/Blog.vue';

const routes = [
  // ...其他路由
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
