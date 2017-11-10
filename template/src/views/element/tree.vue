<template>
  <div>
    <el-col :span="9" :offset="2">
      <el-tree
        id="tree"
        :props="props"
        :load="loadNode"
        lazy
        ref="tree"
        show-checkbox
        highlightCurrent
        @node-click="handleNodeClick"
        @check-change="handleCheckChange">
      </el-tree>
    </el-col>
    <el-col :span="9" :offset="2">
      <el-card id="card">
        <span v-html="description"></span>
      </el-card>
    </el-col>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        props: {
          label: 'name',  // 获取节点的key值
          children: 'zones',
          isLeaf: 'leaf'   // 标记是否是叶节点
        },
        count: 1,
        description: '当前选中节点信息:'
      }
    },
    methods: {
      handleCheckChange (data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
        this.getCheckedNodes()
      },
      handleNodeClick (data) {
        console.log(data)
        this.getCheckedNodes()
      },
      getCheckedNodes () {
        let selectedNodes = ''
        this.$refs.tree.getCheckedNodes().forEach(e => {
          selectedNodes += e.name + '<br>'
        })
        this.description = '当前选中节点信息:<br><br>' + selectedNodes
      },
      loadNode (node, resolve) {
        console.log(node)
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === 'region1') {
          hasChild = true
        } else if (node.data.name === 'region2') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++,
              leaf: true
            }, {
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
