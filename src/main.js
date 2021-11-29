import { createApp } from "vue";
import App from "./App.vue";
import {
  ConfigProvider,
  Layout,
  Row,
  Col,
  Breadcrumb,
  Button,
  Form,
  Card,
  Spin,
  Input,
  Radio,
  PageHeader,
} from "ant-design-vue";
import router from "./router/index.js";

const app = createApp(App);
app.use(router);
app.use(ConfigProvider);
app.use(Layout);
app.use(Row);
app.use(Col);
app.use(Breadcrumb);
app.use(Button);
app.use(Form);
app.use(Form.Item);
app.use(Input);
app.use(Radio);
app.use(PageHeader);
app.use(Card);
app.use(Spin);
// app.use(Antd); // 全量
// app.use(sotre);
app.mount("#app");
