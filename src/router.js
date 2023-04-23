import { createRouter, createWebHistory } from 'vue-router';

// 导入组件，以便在路由中使用它们
import HomePage from './components/HomePage.vue';
import Blog from './views/Blog.vue';
import Kanban from './views/Kanban.vue';

const routes = [
  // 在此处添加其他路由
  { path: '/', component: HomePage },
  { path: '/blog',name: 'Blog',component: Blog},
  { path: '/kanban',name: 'Kanban',component: Kanban}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

