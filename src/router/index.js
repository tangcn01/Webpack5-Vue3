import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap as routes } from "./staticRouters.js";

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
