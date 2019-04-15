<template>
    <div>
        <mt-header fixed title="个人中心">
            <!-- <router-link to="home" slot="left">
                <mt-button icon="back" slot="left">返回</mt-button>
            </router-link> -->
            <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-link to="/">
            <mt-button size="large" type="danger">
                  退出
            </mt-button>
        </router-link>
    </div>
</template>
<script>
export default {
  name: "Center",
  data() {
    return {};
  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
</style>
