<template>
  <div class="dashboard-container">
    
    <div class='hollebg'>
      <div class="img"></div>
    </div>  
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dashboard",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  margin: 0 -15px;
  background: #f7f8f9;
  margin-top: -100px;
  // .img {
  //   display: block;
  //   width: 100%;
  //   height: 100vh;
  //   background: url("../../../static/icon/hello.png") no-repeat 0 85px;
  //   // background-attachment: fixed;
  //   filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
  //       src="../../../static/icon/hello.png",
  //       sizingMethod="scale"
  //     );
  //   -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
  //       src="../../../static/icon/hello.png",
  //       sizingMethod="scale"
  //     );
  //   background-size: cover;
  //   -moz-background-size: cover;
  //   -webkit-background-size: cover;
  // }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
