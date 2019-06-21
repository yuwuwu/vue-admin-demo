<template>
  <el-menu ref="menu1"
           mode="vertical"
           :default-active="$route.path">
    <sidebar-item :menu="menu"></sidebar-item>
  </el-menu>
</template>

<script>
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
  methods: {
  },
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
