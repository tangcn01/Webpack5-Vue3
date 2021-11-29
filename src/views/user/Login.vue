<template>
  <div class="main">
    <a-card style="width: 600px">
      <a-spin :spinning="spinning">
        <a-form
          :model="formState"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          @keyup.enter="onSubmit"
        >
          <a-form-item label="用户名">
            <a-input
              v-model:value="formState.account"
              placeholder="请输入用户名"
            />
          </a-form-item>
          <a-form-item label="密码">
            <a-input-password
              v-model:value="formState.password"
              placeholder="请输入密码"
            />
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" class="submit" @click="onSubmit"
              >登录</a-button
            >
          </a-form-item>
        </a-form>
      </a-spin>
    </a-card>
  </div>
</template>
<script>
import { defineComponent, reactive, toRaw, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

export default defineComponent({
  setup() {
    const spinning = ref(false);
    const formState = reactive({
      account: "",
      password: undefined,
    });
    const store = useStore();
    const router = useRouter();
    const onSubmit = () => {
      spinning.value = true;
      store
        .dispatch("userStore/login", toRaw(formState))
        .then(() => {
          // console.log("submit!", toRaw(formState));
          spinning.value = false;
          router.push("/");
        })
        .catch((data) => {
          message.error(data);
          spinning.value = false;
        });
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formState,
      spinning,
      onSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
.main {
  flex: none;
  width: 650px;
  padding: 36px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  .submit {
    width: 100%;
  }
}
</style>
