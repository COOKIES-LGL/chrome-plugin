<template>
  <div class="search-top">
    <el-tabs
      v-model="SearchSelect.activeName"
      @tab-click="SearchSelect.handleTabClick"
    >
      <el-tab-pane
        v-for="(item, index) in SearchTabList"
        :key="index"
        :label="item.label"
        :name="item.value"
      ></el-tab-pane>
    </el-tabs>
  </div>
  <slot name="input" :data="SearchSelect.activeChildItem"></slot>
  <div class="search-bottom">
    <div
      :class="{
        'active-child-item': item.label === SearchSelect.activeChildItem.label,
      }"
      v-for="item in SearchSelect.activeChildList"
      :key="item.label"
      @click="SearchSelect.clickActiveChild(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, reactive } from 'vue';
import {
  SearchTabList,
  SearchTabListType,
  SearchTabListChildType,
} from '@/constants';

@Options({
  props: {
    msg: String,
  },
})
export default class SearchSelect extends Vue {
  private SearchTabList: SearchTabListType[] = SearchTabList;
  private activeName: string = SearchTabList[0].value;

  private SearchSelect = setup(() => {
    const activeName = ref<string>(this.activeName);
    const initSearchTabList: SearchTabListChildType[] = Object.assign({},
      SearchTabList[0].children,
    );
    let activeChildList = ref<SearchTabListChildType[]>(initSearchTabList);
    const initActiveChildItem = Object.assign({}, activeChildList.value[0]);
    let activeChildItem = reactive<SearchTabListChildType>(initActiveChildItem);
 
    const handleTabClick = (item: any) => {
      const clickLabel = item.props.label;
      activeChildList.value = SearchTabList.filter(
        (item) => item.label === clickLabel,
      )[0].children;
      console.log(SearchTabList);
      activeChildItem.label = activeChildList.value[0].label;
      activeChildItem.holdplace = activeChildList.value[0].holdplace;
      activeChildItem.url = activeChildList.value[0].url;
    };

    const clickActiveChild = (item: SearchTabListChildType) => {
      activeChildItem.label = item.label;
      activeChildItem.holdplace = item.holdplace;
      activeChildItem.url = item.url;
    };
    return {
      activeChildList,
      activeChildItem,
      activeName,
      handleTabClick,
      clickActiveChild,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
::v-deep .el-tabs__item {
  font-size: 16px;
}
.search-bottom {
  margin-top: 10px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  cursor: pointer;
  .active-child-item {
    color: #409EFF;
    font-weight: bold;
  }
}
</style>
