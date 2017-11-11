<template>
  <div id="tabs">
    <el-tabs
      v-model="selectedTab"
      tab-position="top"
      @tab-click="handleTabClick"
      @tab-remove="removeTab"
      @tab-add="addTab"
      closable
      type="card"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.name"
        :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      editableTabs () {
        return this.$store.state.visitedViews
      },
      selectedTab () {
        return this.$store.state.visitedViewName
      }
    },
    methods: {
      handleTabClick (tab, event) {
        let visitedViews = this.$store.state.visitedViews
        let clickedTabName = tab.$options.propsData.name
        for (let i = 0; i < visitedViews.length; i++) {
          let view = visitedViews[i]
          if (view.name === clickedTabName) {
            this.$router.push(view.path)
          }
        }
      },
      addTab () {
        this.$message.error('不能手动添加Tab标签!')
      },
      removeTab (tabName) {
        let visitedViews = this.$store.state.visitedViews
        if (visitedViews.length <= 1) {
          this.$message.error('Tab标签不能全部关闭!')
          return
        }
        if (tabName === this.$store.state.visitedViewName) {
          let idx // 要关闭的tab的index
          for (let i = 0; i < visitedViews.length; i++) {
            let view = visitedViews[i]
            if (view.name === tabName) {
              idx = i
            }
          }
          if (idx >= 1) {
            this.$router.push(visitedViews[idx - 1])
          } else {
            this.$router.push(visitedViews[idx + 1])
          }
        }
        this.$store.state.visitedViews = visitedViews.filter(view => {
          console.log(view.name, tabName)
          return view.name !== tabName
        })
      }
    }
  }
</script>
