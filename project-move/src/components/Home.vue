<template>
  <div id="home">
    <div class="page-tabbar">
      <div class="page-wrap">
        <!-- <div class="page-title">Tabbar</div> -->
        <div>
          <mt-cell
            class="page-part"
            title="当前选中"
            :value="selected"
          />
          <my-coms></my-coms>
        </div>
        <!-- tabcontainer -->
        <mt-tab-container
          class="page-tabbar-container page-container"
          v-model="selected"
        >
          <mt-tab-container-item id="店铺">
            <!-- <mt-cell
            v-for="(n,key) in 20"
            :title="'餐厅 ' + n"
            :item=key
            :key=key
          /> -->
            <home-coms></home-coms>
          </mt-tab-container-item>
          <mt-tab-container-item id="消息">
            <mt-cell
              v-for="(n,key) in 5"
              :title="'订单 ' + n"
              :key=key
            />
            <info-coms></info-coms>
          </mt-tab-container-item>
          <mt-tab-container-item id="工具">
            <mt-cell
              v-for="(n,key) in 7"
              :title="'发现 ' + n"
              :key=key
            />
            <tools-coms></tools-coms>
          </mt-tab-container-item>

          <mt-tab-container-item id="我的">
            <div
              v-if="ifs"
              id="root"
            >
              <div class="page-part">
                <!-- cell -->
                <mt-cell
                  v-for="(n,key) in 15"
                  :title="'我的 ' + n"
                  :key=key
                />
              </div>
              <router-link to="/">
                <!-- button -->
                <mt-button
                  type="danger"
                  size="large"
                >退出</mt-button>
              </router-link>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <mt-tabbar
        class="foot-tabbar"
        v-model="selected"
      >
        <mt-tab-item id="店铺">
          <img
            slot="icon"
            src="../assets/logo.png"
          >
          店铺
        </mt-tab-item>
        <mt-tab-item id="消息">
          <img
            slot="icon"
            src="../assets/logo.png"
          >
          消息
        </mt-tab-item>
        <mt-tab-item id="工具">
          <img
            slot="icon"
            src="../assets/logo.png"
          >
          工具
        </mt-tab-item>
        <mt-tab-item
          id="我的"
          @click.native="goSet"
        >
          <img
            slot="icon"
            src="../assets/logo.png"
          >
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
//home的四个contain
import homeComs from './homeComponents/homeComs.vue';
import infoComs from './homeComponents/infoComs.vue';
import toolsComs from './homeComponents/toolsComs.vue';
import myComs from './homeComponents/myComs.vue';
export default {
  components: {
    homeComs,
    infoComs,
    toolsComs,
    myComs
  },
  name: 'Home',
  data() {
    return {
      selected: '店铺',
      ifs: false
    };
  },
  created() {
    // this.$log = 'abc';
    // this.$log();
  },
  methods: {
    goSet() {
      // console.log(this.data);
      // this.$router.push('center')if
      this.ifs = true;
    }
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
.mint-tab-container-wrap {
  margin-bottom: 50px;
}
.foot-tabbar {
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
</style>
