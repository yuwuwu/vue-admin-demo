<template>
  <div class="sidebar">
    <div class="slde-bcak-log">
      <router-link to='/dashboard'>
       <!-- <img class="imgleft" src="../../../static/icon/logo@3x.png" alt=""> -->
       <h3 class="logo">title</h3>
      </router-link>
    </div>
     <template>
       <el-menu  :unique-opened='true'>
        <el-submenu  v-for="item in menu"  :index="item.id" :key="item.id" >        
              <template slot="title">
                <img v-if="item.icon != ''" :src="'../../../static/icon/'+item.icon+'.png'" alt="" class="side-img">
                {{item.name}}          
              </template>
              <el-menu-item  v-for="child in item.subMenus" :index="child.id" :key="child.id">
                  <router-link  class="menu-indent" :to="{path:child.href,query:{keep:'false'}}">
                    <span style="display:inline-block;width:160px;">{{child.name}}</span>
                  </router-link>  
              </el-menu-item>
        </el-submenu>
        </el-menu>
    </template>     	  
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  data() {
    return {
    };
  },
  computed: {
  },
  props: {
    menu: {
      type: Array
    }
  },
  mounted() {},
  methods: {
    show() {}
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.svg-icon {
  margin-right: 10px;
}
.side-span {
  display: inline-block;
  width: 23px;
  // height: 1px;
  text-align: right;
}
.side-img {
  width: 22px;
  margin-bottom: 5px;
  margin-right: 10px;
}
.slde-bcak-log {
  width: 100%;
  height: 50px;

  .logo {
    text-align: center;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #eee;
    line-height: 50px;
    text-shadow: 0 -1px 1px #2f323e;
    -moz-text-shadow: 0 -1px 1px #2f323e;
    -webkit-text-shadow: 0 -1px 1px #2f323e;
  }
}
.slde-bcak-log .imgleft {
  width: 190px;
  height: 55px;
}
.slde-bcak-log .imgright {
  width: 145px;
  float: left;
  .titc {
    padding-left: 5px;
    font-family: PingFangSC-Regular;
    margin-top: 10px;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
  }
  .tite {
    font-family: PingFangSC-Regular;
    line-height: 0px;
    font-size: 0px;
    color: #ffffff;
    letter-spacing: 0;
  }
}
.sidebar {
  width: 200px;
}
.sidebar .el-submenu {
  color: #a5b6c8;
  background-color: #2f323e;
}
.sidebar .el-submenu .el-submenu__title {
  color: #a5b6c8;
}
.el-menu-item,
.el-submenu__title {
  color: #a5b6c8;
  background-color: #2f323e;
}
.sidebar-container {
  background-color: #2f323e !important;
}
.el-menu-item:hover,
.el-submenu__title:hover {
  // background-color: #2f323e;
  background-color: #2f323e;
  color: #ffffff;
}
.el-submenu .el-menu .is-active {
  background-color: #6989f3;
}
.el-submenu .el-menu .el-menu-item:hover {
  background-color: #6989f3 !important;
  color: #333;
}
.is-opened .el-submenu__title {
  color: #ffffff !important;
}
// .sidebar-wrapper .el-menu{
//   min-width: 90%;
// }
// .app-wrapper .sidebar-container[data-v-31373d3a] {
//     transition: all .28s ease-out;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0px;
//     overflow: hidden;
//     overflow-y: scroll;
// }

</style>

