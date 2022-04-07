<template>
  <div id="container"></div>
</template>

<script>
import "../../assets/js/bmap_offline_api_min.js";

import { defineComponent, onMounted, ref } from "vue";

import { Modal } from "ant-design-vue";

export default defineComponent({
  components: {
    AModal: Modal,
  },
  setup() {
    onMounted(() => {
      // 百度地图
      var map = new BMap.Map("container");
      var point = new BMap.Point(114.360268, 30.481726);
      map.centerAndZoom(point, 16);

      //设置定位点的弹跳动画
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      map.enableScrollWheelZoom(true);
      //添加工具条比例尺控件
      var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
      }); // 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL,
      }); //右上角，仅包含平移和缩放按钮
      map.addControl(top_left_control);
      map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
    });

    return {};
  },
});
</script>
<style scoped></style>
<style></style>
<style lang="less">
#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
