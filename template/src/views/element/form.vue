<template>
  <el-col :span="12">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="普通输入框">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码输入框">
        <el-input v-model="form.name" type="password"></el-input>
      </el-form-item>
      <el-form-item label="下拉列表框">
        <el-select v-model="form.region" placeholder="请选择城市">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期选择框">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :offset="1" :span="1">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="switch开关">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="复选框">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="选项一" name="type"></el-checkbox>
          <el-checkbox label="选项二" name="type"></el-checkbox>
          <el-checkbox label="选项三" name="type"></el-checkbox>
          <el-checkbox label="选项四" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选框">
        <el-radio-group v-model="form.resource">
          <el-radio label="选项1"></el-radio>
          <el-radio label="选项2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本输入框">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="文件上传">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
