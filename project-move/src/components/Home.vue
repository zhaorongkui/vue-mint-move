<template>
  <!-- <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div> -->
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell
          class="page-part"
          title="当前选中"
          :value="selected"
        />
      </div>

      <!-- tabcontainer -->
      <mt-tab-container
        class="page-tabbar-container"
        v-model="selected"
      >

        <mt-tab-container-item id="外卖">
          <mt-cell
            v-for="n in 10 "
            :key="n.text"
            :title="'餐厅 ' + n"
          />
        </mt-tab-container-item>

        <mt-tab-container-item id="订单">
          <mt-cell
            v-for="n in 5"
            :key="n.text"
            :title="'订单 ' + n"
          />
        </mt-tab-container-item>

        <mt-tab-container-item id="发现">
          <mt-cell
            v-for="n in 7"
            :key="n.text"
            :title="'发现 ' + n"
          />
        </mt-tab-container-item>

        <mt-tab-container-item id="我的">
          <div class="page-part">
            <!-- cell -->
            <mt-cell
              v-for="n in 12"
              :key="n.text"
              :title="'我的 ' + n"
            />
          </div>
          <router-link to="/">
            <!-- button -->
            <mt-button
              type="danger"
              size="large"
            >退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img
          slot="icon"
          src="../assets/logo.png"
        >
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img
          slot="icon"
          src="../assets/logo.png"
        >
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img
          slot="icon"
          src="../assets/logo.png"
        >
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img
          slot="icon"
          src="../assets/logo.png"
        >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>
<style>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
