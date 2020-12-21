<template>
  <div class="app-main">
    <appHeader/>
    <!-- 打开页面 -->
    <el-input placeholder="请输入访问页面地址" v-model="formData.address">
      <template slot="prepend">Http://</template>
      <el-button slot="append" type="text" @click="open">访问</el-button>
    </el-input>
  </div>
</template>
<script>
import appHeader from '@/views/layouts/app-header.vue'

export default {
  name: 'app-main',
  components: {
    appHeader
  },
  data () {
    return {
      formData: {
        address: ''
      }
    }
  },
  methods: {
    // 访问
    async open () {
      const { address } = this.formData;
      await this.$request({
        url: 'api/haha',
        method: 'post',
        data: {
          address
        }
      })
    }
  }
}
</script>
<style scoped>
.app-main {
  height: calc(100% - 56px);
  margin-top: 56px;
  overflow-y: auto;
}
</style>
