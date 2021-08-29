<template>
  <div class="left-panel-box">
    <el-button @click="LeftPabelIndex.addIframeClick" type="primary" round class="add-iframe">+新建导航</el-button>
    <el-tabs tabPosition="left" style="height: 200px;">
      <el-tab-pane label="掘金前端">掘金前端</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-dialog :showClose="false" top="30vh" width="800px" title="新建导航地址" v-model="LeftPabelIndex.dialogFormVisible">
      <el-form :model="LeftPabelIndex.form">
        <el-form-item label="站点名称:*" :label-width="formLabelWidth">
          <el-input placeholder="请输入您的iframe名称" v-model="LeftPabelIndex.form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="站点地址:*" :label-width="formLabelWidth">
          <el-input placeholder="请输入您的iframe地址" v-model="LeftPabelIndex.form.url" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="LeftPabelIndex.dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="LeftPabelIndex.commitFormData">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { chromeOnMessage, chromeSendMessage } from '../../utils';

@Options({
  props: {
    type: String,
  },
})
export default class LeftPabel extends Vue {
  private type: string;
  private formLabelWidth = '100px';
  private LeftPabelIndex = setup(() => {
    const iframeLinkList = reactive([]);
    const dialogFormVisible = ref(false);



    const form = reactive({
      title: '',
      url: '',
    });
    const addIframeClick = () => {
      dialogFormVisible.value = true;
    };
    const commitFormData = () => {
      if (form.title && form.url) {
        dialogFormVisible.value = false;
      } else {
        ElMessage.warning({
          message: '表单内容不能为空!',
          type: 'warning',
        });
      }
    };
    return {
      addIframeClick,
      dialogFormVisible,
      form,
      commitFormData,
    };
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
  .add-iframe {
    width: 80%;
    margin: 20px auto;
  }
  /deep/ .el-dialog {
    border-radius: 20px;
  }
}
</style>
