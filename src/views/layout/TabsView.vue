<template>
  <div class='tabs-view-container'>

    <div class="leftmove"
         @click="leftmove">←</div>
    <router-link class="tabs-view"
                 v-for="tag in Array.from(visitedViews)"
                 :to="{path:tag.path,query:{keep:'true'}}"
                 :key="tag.path+'?'+'keep=true'">
      <el-tag :closable="true"
              class="tabsview"
              :type="isActive(tag.path)?'primary':''"
              @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
    <div class="rightmove"
         @click="rightmove">→</div>
  </div>

</template>

<script>
export default {
  computed: {
    visitedViews() {
      return this.$store.state.app.visitedViews.slice(-10)
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      // view.path = view.path+'?keep=true'
      // var routerObj
      this.$store.dispatch('delVisitedViews', view).then(views => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute() {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    addViewTabs() {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive(path) {
      return path === this.$route.path + '?keep=true'
    },
    rightmove() {
      var obj = this.$store.state.app.visitedViews
      var objLen = obj.length
      var activeIndex = 0
      if (objLen !== 0) {
        for (var i = 0; i < objLen; i++) {
          if (obj[i].path === this.$route.path + '?keep=true') {
            activeIndex = i
          }
        }
        if (activeIndex < objLen - 1) {
          activeIndex++
          this.$router.push({ path: obj[activeIndex].path })
        } else {
          activeIndex = 0
          this.$router.push({ path: obj[activeIndex].path })
        }
      }
    },
    leftmove() {
      var obj = this.$store.state.app.visitedViews
      var objLen = obj.length
      // eslint-disable-next-line eqeqeq
      if (objLen !== 0) {
        var lastObj = obj.slice(-1)[0]
        var lastIndex = 0
        var activeIndex = 0
        for (var i = 0; i < objLen; i++) {
          if (obj[i].path === this.$route.path + '?keep=true') {
            activeIndex = i
          }
          if (obj[i].path === lastObj.path) {
            lastIndex = i
          }
        }
        if (activeIndex > 0) {
          activeIndex--
          this.$router.push({ path: obj[activeIndex].path })
        } else {
          activeIndex = lastIndex
          this.$router.push({ path: obj[activeIndex].path })
        }
      }
    }
  },
  watch: {
    $route() {
      this.addViewTabs()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tabs-view-container {
  margin-top: 0px !important;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  width: 100%;
  vertical-align: top;
  margin-left: 10px;
  border-top: 1px solid #eee;
  .leftmove {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    color: gray;
  }
  .rightmove {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    color: gray;
  }
  .tabs-view {
    &:hover {
      background-color: red;
    }
    height: 30px;
    float: left;
    margin-left: 10px;
    border-right: 1px solid #eee;

    span {
      height: 31px;
    }
  }
}
</style>
