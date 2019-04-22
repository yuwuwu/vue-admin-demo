<template>
  <a-menu ref="menu1" mode="vertical" :default-active="$route.path">
    <sidebar-item  :menu="menu"></sidebar-item>
  </a-menu>
</template>

<script>
import { Loading } from 'ant-design-vue'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
     routes() {
       
       return this.$router.options.routes
    },
    menu() {
       return this.$store.state.user.menu
    }
  },
  methods:{
  },
  mounted() {
   
  }  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
