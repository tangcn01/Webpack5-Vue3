<template>
  <div>
    <a-menu
      theme="dark"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <template v-for="router in routers">
        <a-menu-item :key="router.name" v-if="!router.children">
          <router-link :to="router.url">
            <span>{{ router.title }}</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu :key="router.name" v-else>
          <template #title>
            <span>
              <user-outlined />
              <span>{{ router.title }}</span>
            </span>
          </template>
          <a-menu-item v-for="c in router.children" :key="c.name">
            <router-link :to="c.url">{{ c.title }}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import {
  reactive,
  toRaw,
  ref,
  onBeforeMount,
  onMounted,
  computed,
  watch,
} from "vue";
import { useRouter } from "vue-router";
import { constantRouterMap } from "@/router/staticRouters.js";
import { Menu } from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";
export default {
  name: "",
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    UserOutlined,
  },
  setup() {
    const routerData = reactive(constantRouterMap);
    let routers = ref([]);
    let selectedKeys = ref(["name"]);
    const router = useRouter();
    let openKeys = ref([]);
    const currentRouteName = computed(() => {
      return router.currentRoute.value.name;
    });
    // 生成路由列表
    const getRouterData = (val, parentUrl) => {
      let path = parentUrl ? parentUrl + "/" + val.path : val.path;
      path = path.replace("//", "/");
      return {
        name: val.name,
        title: val.meta ? val.meta.title : val.name,
        url: path,
      };
    };
    let data = routerData.filter(
      (item) => item.meta == undefined || item.meta.isShow != false
    );
    data.forEach((element) => {
      let _data = getRouterData(element);
      if (element.children && element.children.length > 0) {
        _data.children = element.children.map((item) => {
          return getRouterData(item, element.path);
        });
      }
      routers.value.push(_data);
    });
    const getOpenKeys = () => {
      return routers.value
        .filter((item) => {
          return (
            item.name == currentRouteName.value ||
            (item.children &&
              item.children.some((i) => i.name == currentRouteName.value))
          );
        })
        .map((item) => item.name);
    };

    watch(currentRouteName, (val) => {
      selectedKeys.value = [currentRouteName.value];
      openKeys.value = getOpenKeys();
    });

    onBeforeMount(() => {});
    onMounted(() => {
      selectedKeys.value = [currentRouteName.value];
      openKeys.value = getOpenKeys();
    });
    const handleClick = (e) => {
      console.log("click", e, selectedKeys, openKeys);
    };
    const titleClick = (e) => {
      console.log("titleClick", e);
    };
    console.log("selectedKeys:", selectedKeys.value);
    console.log("openKeys:", openKeys.value);
    return {
      selectedKeys,
      openKeys,
      routers: toRaw(routers),
      handleClick,
    };
  },
};
</script>
<style scoped lang="less"></style>
