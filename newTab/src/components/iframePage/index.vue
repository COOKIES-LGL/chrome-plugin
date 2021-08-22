<template>
  <div class="iframe-box">
    <left-panel></left-panel>
    <content-panel></content-panel>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import LeftPanel from './LeftPanel.vue';
import ContentPanel from './ContentPanel.vue';

@Options({
  props: {
    type: String,
  },
  components: {
    LeftPanel,
    ContentPanel,
  },
})
export default class IframePage extends Vue {
  private type: string;
  private IframePage = setup(() => {
    return {};
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.iframe-box {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
