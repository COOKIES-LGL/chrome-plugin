<template>
  <div class="left-panel-box">
    <el-tabs tabPosition="left" style="height: 200px;">
      <el-tab-pane label="掘金前端">掘金前端</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';

@Options({
  props: {
    type: String,
  },
})
export default class LeftPabel extends Vue {
  private type: string;
  private SearchIndex = setup(() => {
    return {};
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.left-panel-box {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
