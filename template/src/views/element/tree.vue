<template>
  <div>
    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      ref="tree"
      show-checkbox
      highlightCurrent
      @node-click="handleNodeClick"
      @check-change="handleCheckChange">
    </el-tree>
    <el-card>
      \{{ description }}
    </el-card>
    <el-button @click="getCheckedNodes">获取选中节点</el-button>
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
          selectedNodes += e.name + '\n'
        })
        this.description = '当前选中节点信息:\n' + selectedNodes
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
