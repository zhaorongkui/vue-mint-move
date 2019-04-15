<template>
  <div>
    <div>
      <mt-header fixed title="快速注册">
          <mt-button type="default" icon="back" slot="left" @click.native="goback"></mt-button>
          <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <mt-field label="86" placeholder="请输入手机号" class="inputStyle" type="tel" v-model="phone"></mt-field>
      <router-link to="/">
          <mt-button class="lagerBtn" size="large" type="default">
                同意协议并注册
          </mt-button>
      </router-link>
      <mt-cell class="test fonts" title="需要帮助，您可以联系……"></mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      select: "商品"
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.inputStyle {
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.mint-cell-wrapper {
  background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
}
.lagerBtn {
  margin-top: 50px;
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  border-radius: 25px;
  color: #fff;
  height: 48px;
}
.test {
  text-align: left;
  font-size:14px !important;
}
</style>
