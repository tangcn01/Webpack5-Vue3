export const constantRouterMap = [
  {
    path: "/user/login",
    name: "login",
    component: () => import("../views/user/Login.vue"),
    meta: {
      title: "登录",
      isShow: false,
    },
  },
  {
    path: "/dataView",
    name: "dataView",
    component: () => import("../views/Screen1.vue"),
    meta: {
      title: "大屏",
      isShow: true,
    },
  },

  {
    path: "/admin",
    name: "adminLayout",
    component: () => import("../layouts/Base.vue"),
    meta: {
      title: "配置中心",
      isAdmin: true,
    },
    children: [],
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../layouts/Base.vue"),
    meta: {
      title: "首页",
    },
    children: [],
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/map/Index.vue"),
    meta: {
      title: "地图",
    },
    children: [],
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("../views/404.vue"),
    meta: {
      title: "404",
      isShow: false,
    },
  },
];
