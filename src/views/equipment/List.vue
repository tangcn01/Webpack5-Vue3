<template>
  <a-layout>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }"
      width="300"
    >
      <Company></Company>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '300px' }">
      <a-layout-header
        :style="{ background: '#fff', padding: 0, height: '160px' }"
      >
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="4">
            <a-card hoverable style="width: 200px">
              <template class="ant-card-actions" #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta title="--℃" description="水温度">
                <template #avatar>
                  <a-avatar shape="square" :size="64" :src="waterPNG" />
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4"
            ><a-card hoverable style="width: 200px">
              <template class="ant-card-actions" #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta title="--mg/L" description="水溶氧">
                <template #avatar>
                  <a-avatar shape="square" :size="64" :src="O2" />
                </template>
              </a-card-meta> </a-card
          ></a-col>
          <a-col :span="4">
            <a-card hoverable style="width: 200px">
              <template class="ant-card-actions" #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta title="--mg/L" description="水溶氨氮">
                <template #avatar>
                  <a-avatar shape="square" :size="64" :src="NH4" />
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card hoverable style="width: 200px">
              <template class="ant-card-actions" #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta title="--" description="水PH">
                <template #avatar>
                  <a-avatar shape="square" :size="64" :src="PH" />
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="7"></a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div
          :style="{ padding: '24px', background: '#fff', textAlign: 'center' }"
        >
          <div id="echarts1" class="charts" style="height: 300px"></div>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }"> </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import {
  defineComponent,
  computed,
  ref,
  reactive,
  onMounted,
  defineAsyncComponent,
} from "vue";
import { Table, Space, Modal, Avatar } from "ant-design-vue";
import Company from "./Company.vue";

// import { userList } from "./service.js";
import waterPNG from "@/assets/img/water.png";
import O2 from "@/assets/img/O2.png";
import NH4 from "@/assets/img/NH4.png";
import PH from "@/assets/img/PH.png";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
]);

export default defineComponent({
  components: {
    AAvatar: Avatar,
    Company,
    SmileOutlined,
    DownOutlined,
  },
  setup() {
    const data = ref([]);
    const edit = ref();
    const pagination = reactive({ current: 1, pageSize: 10, total: 0 });
    const params = reactive({ keyword: "" });
    const visible = ref(false);
    const userId = ref();
    const getData = () => {};

    const handleTableChange = (pag, filters, sorter) => {
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };
    const handleSave = () => {
      visible.value = true;
      userId.value = undefined;
      edit.value.submit().then(() => {
        visible.value = false;
        getData();
      });
    };
    const EditUser = (id) => {
      visible.value = true;
      userId.value = id;
    };
    onMounted(() => {
      initChart();
    });

    const initChart = () => {
      var chartDom = document.getElementById("echarts1");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: [
            "0时",
            "1时",
            "2时",
            "3时",
            "4时",
            "5时",
            "6时",
            "7时",
            "8时",
            "9时",
            "10时",
            "11时",
            "12时",
            "13时",
            "14时",
            "15时",
            "16时",
            "17时",
            "18时",
            "19时",
            "20时",
            "21时",
            "22时",
            "23时",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              8, 7, 6, 5, 5, 6, 7, 12, 13, 17, 18, 19, 20, 20, 20, 18, 17, 17,
              13, 10, 10, 10, 10, 9,
            ],
            type: "line",
            smooth: true,
          },
        ],
      };
      option && myChart.setOption(option);
    };

    return {
      params,
      data,
      pagination,
      visible,
      edit,
      onMounted,
      handleSave,
      waterPNG,
      O2,
      NH4,
      PH,
    };
  },
});
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
