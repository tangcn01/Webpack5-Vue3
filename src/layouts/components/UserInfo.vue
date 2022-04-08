<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <UserOutlined></UserOutlined>
      xx <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onMenuClick">
        <a-menu-item key="userinfo">
          <span>用户信息</span>
        </a-menu-item>
        <a-menu-item key="logout">
          <span>退出</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
import { DownOutlined, UserOutlined } from "@ant-design/icons-vue";
import { computed, defineComponent, reactive } from "vue";
import { Menu, Dropdown } from "ant-design-vue";
// import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RightTopUser",
  components: {
    ADropdown: Dropdown,
    DownOutlined,
    UserOutlined,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
  },
  setup() {
    const router = useRouter();
    // const store = useStore();
    // const currentUser = reactive(store.state.userStore.userInfo);
    // 点击菜单
    const onMenuClick = async (event) => {
      const { key } = event;

      if (key === "logout") {
        // const res = await store.dispatch("userStore/logout");
        // if (res === true) {
        //   router.replace({
        //     path: "/user/login",
        //     query: {
        //       redirect: router.currentRoute.value.path,
        //       ...router.currentRoute.value.query,
        //     },
        //   });
        // }
      }
    };

    return {
      //   currentUser,
      onMenuClick,
    };
  },
});
</script>
