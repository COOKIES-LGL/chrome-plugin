<template>
  <div class="content-panel-box">
    <object class="iframe-dom" data="https://juejin.cn/frontend"></object>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';

@Options({
  props: {
    type: String,
  },
  components: {},
})
export default class ContentPanel extends Vue {
  private type: string;
  private ContentPanel = setup(() => {
    return {};
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content-panel-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .iframe-dom {
    width: 1600px;
    height: 100%;
  }
}
</style>
