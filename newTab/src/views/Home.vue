<template>
  <div class="home">
    <SearchIndex type="inner"></SearchIndex>
    <IframePage></IframePage>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchIndex from '@/components/search/SearchIndex.vue'; // @ is an alias to /src
import IframePage from '@/components/iframePage/index.vue';
@Options({
  components: {
    SearchIndex,
    IframePage,
  },
})
export default class Home extends Vue {}
</script>
