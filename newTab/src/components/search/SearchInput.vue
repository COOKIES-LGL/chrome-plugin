<template>
  <div class="search-input-box">
    <el-input
      v-model="SearchInput.searchValue"
      v-on:keyup.enter="SearchInput.changeInput"
      :placeholder="SearchInput.configValue.holdplace"
      ><template v-slot:suffix><i @click="SearchInput.changeInput" class="el-icon-search"></i></template
    ></el-input>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch, reactive } from 'vue';
import { SearchTabListChildType } from '@/constants';

@Options({
  props: {
    type: String,
    configData: {},
  },
})
export default class SearchInput extends Vue {
  private type: string;
  private configData: SearchTabListChildType;
  private SearchInput = setup(() => {
    const searchValue = ref<string>(null);
    let configValue = reactive<SearchTabListChildType>(this.configData);
    const changeInput = () => {
      console.log(this.configData);
      window.open(`${this.configData.url}${searchValue.value}`);
    };
    watch(this.$props, (newValue: any) => {
      // console.log(newValue.configData);
      configValue.label = newValue.configData.label;
      configValue.holdplace = newValue.configData.holdplace;
      configValue.url = newValue.configData.url;
    });
    return {
      searchValue,
      configValue,
      changeInput,
    };
  });
}
</script>
<style scoped lang="less">
.search-input-box {
  width: 700px;
  height: 50px;
  display: flex;
  flex-direction: row;
  ::-webkit-input-placeholder {
    color: #409EFF;
    opacity: 0.5;
    font-size: 14px;
    font-weight: bolder;
  }
  ::v-deep .el-input {
    line-height: 50px;
    .el-input__inner {
      height: 50px;
      border-radius: 25px;
      line-height: 50px;
    }
    .el-input__suffix {
      cursor: pointer;
      font-size: 16px;
      color: #333;
      margin-right: 10px;
      font-weight: bold;
    }
  }
}
</style>
