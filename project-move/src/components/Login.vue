<template>
  <div id="mydiv">
    <!-- 提醒栏 -->
    <div class="tipslogin">
      <span>你需要登录才能继续仿问</span>
      <span class="closeSpan">关闭</span>
    </div>
    <div class="imgDiv">
      <img
        src="../assets/imgs/tblogo.png"
        alt=""
        class="logo"
      >
    </div>
    <!-- 操作区域 -->
    <div class="operateDiv">
      <!-- 账号 -->
      <mt-field
        :placeholder="accountPlaceholder"
        v-model="uname"
        class="myinput"
      ></mt-field>
      <!-- 密码 -->
      <mt-field
        v-show="isUserAccount"
        placeholder="请输入密码"
        type="password"
        v-model="upass"
        class="myinput"
      ></mt-field>
      <!-- 短信验证码 -->
      <mt-field
        v-show="!isUserAccount"
        placeholder="校验码"
        v-model="getCode"
        class="myinput"
      >
        <span class="getCode">获取短信验证码</span>
      </mt-field>
      <!-- 免费注册块 -->
      <div class="registerDiv">
        <span><router-link to="/register">免费注册</router-link></span>
        <span v-show="forgetPassShowroNot">忘记密码</span>
      </div>
      <!-- 登录和切换登录方式块 -->
      <div>
        <mt-button
          size="large"
          class="mybutton1"
          @click.native="login"
        >
          登录
        </mt-button>
        <mt-button
          size="large"
          type="primary"
          class="mybutton2"
          @click.native="changeLoginMethod"
        >{{defaultAccountText}}</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  // el: '#mydiv',
  data() {
    return {
      // 默认的用户名
      uname: '',
      // 默认的用户密码
      upass: '',
      // 是否显示忘记密码
      forgetPassShowroNot: true,
      // 默认的用户名默认值
      accountPlaceholder: '手机号/邮箱/会员名',
      // 是否是用户账户登录，默认是 true
      isUserAccount: true,
      // 默认短信验证码的值
      getCode: '',
      // 切换登录方式按钮默认显示的文本
      defaultAccountText: '短信验证码登录'
    };
  },
  methods: {
    // 登录显示模态框 调用 mint-ui 的 messagebox
    login() {
      if (!this.uname) {
        this.$messagebox('', '请输入用户名');
      } else if (!this.upass) {
        this.$messagebox('', '请输入密码');
      } else {
        this.$router.push('home');
      }
    },
    // 切换登录方式
    changeLoginMethod() {
      if (this.isUserAccount) {
        this.defaultAccountText = '账户密码登录';
        this.accountPlaceholder = '请输入手机号码';
        this.forgetPassShowroNot = false;
      } else {
        this.defaultAccountText = '短信验证码登录';
        this.accountPlaceholder = '手机号/邮箱/会员名';
        this.forgetPassShowroNot = true;
      }
      this.isUserAccount = !this.isUserAccount;
    }
  }
};
</script>
<style>
/* 你需要登录才能继续仿问的布局样式 */
.tipslogin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: rgb(238, 238, 238);
  padding-left: 20px;
  padding-right: 20px;
}
/* 半闭样式 */
.closeSpan {
  color: rgb(153, 153, 153);
}
/* 图片 logo 根样式 */
.imgDiv {
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
/* 图片样式 */
.logo {
  width: 80px;
  height: 80px;
}
/* 上面的线隐藏 */
.mint-cell-wrapper {
  background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
}
/* 输入框底边框样式 */
/* .mint-cell-wrapper {
  border-bottom: 1px solid #ff5000;
} */
/* 修改按钮按钮下的默认颜色 */
.mint-button::after {
  background-color: transparent;
}
/* 操作区域的样式*/
.operateDiv {
  padding-left: 20px;
  padding-right: 20px;
}
/* 输入框边距 */
.myinput {
  margin-top: 30px;
  background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
   border-bottom: 1px solid #ff5000;
   border-top: 0px solid #ff5000;
}
/* 获取短信验证码字体颜色 */
.getCode {
  color: #ff5000;
  font-size: 17px;
  border-left: 1px solid #b5b5b5;
  padding-left: 7px;
}
/* 免费注册根样式 */
.registerDiv {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 免费注册字体样式*/
.registerDiv span {
  color: #555;
}
/* 登录短信验证按钮边距 */
.mybutton1 {
  margin-top: 20px;
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  border-radius: 25px;
  color: #fff;
  height: 48px;
}
/* 修改默认 butoon 的样式 达到和淘宝登录一样 */
/* .mint-button--default {
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  border-radius: 25px;
  color: #fff;
  height: 48px;
} */
/* 同上 */
/* .mint-button--primary { */
.mybutton2 {
  margin-top: 20px;
  border-radius: 25px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #ff5000;
  color: #ff5000;
}
/* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
.mint-msgbox {
  border-radius: 8px;
  width: 70%;
}
/* 弹出框内容样式 */
.mint-msgbox-content {
  min-height: 50px;
  font-size: 18px;
}
/* 弹出内容居中 */
.mint-msgbox-message {
  line-height: 50px;
}
/* 弹出框确定按钮样式 */
.mint-msgbox-btns {
  height: 60px;
}
/* 弹出框确定按钮字体 */
.mint-msgbox-confirm {
  color: #f40;
}
</style>
