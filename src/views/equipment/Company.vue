<template>
  <div>
    <a-menu
      style="width: 356px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-sub-menu key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <template #title>乐山农业产业服务有限公司</template>
        <a-menu-item key="1.1">养殖基地1</a-menu-item>
        <a-menu-item key="1.2">养殖基地2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="2">
        <template #icon>
          <PieChartOutlined />
        </template>
        乐山富凯农业发展有限公司
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <PieChartOutlined />
        </template>
        乐山嘉益农业发展有限公司
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <PieChartOutlined />
        </template>
        乐山信利农业发展有限公司
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <PieChartOutlined />
        </template>
        乐山神龙源农业发展有限责任公司
      </a-menu-item>
      <a-menu-item key="6">
        <template #icon>
          <PieChartOutlined />
        </template>
        夹江县聚农生态农业发展有限公司
      </a-menu-item>
      <a-menu-item key="7">
        <template #icon>
          <PieChartOutlined />
        </template>
        四川幸福农庄农业发展有限公司
      </a-menu-item>
      <a-menu-item key="8">
        <template #icon>
          <PieChartOutlined />
        </template>
        犍为县广硕农业发展有限公司
      </a-menu-item>
      <a-menu-item key="9">
        <template #icon>
          <PieChartOutlined />
        </template>
        Navigation Two
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { DownOutlined, PieChartOutlined } from "@ant-design/icons-vue";
import { Menu } from "ant-design-vue";
export default defineComponent({
  components: {
    DownOutlined,
    PieChartOutlined,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
  },
  setup() {
    const openKeys = ref(["1"]);
    const selectedKeys = ref(["1"]);

    return {
      openKeys,
      selectedKeys,
    };
  },
});
</script>
