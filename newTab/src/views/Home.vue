<template>
  <div class="home">
    <SearchIndex type="inner"></SearchIndex>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchIndex from '@/components/search/SearchIndex.vue'; // @ is an alias to /src

@Options({
  components: {
    SearchIndex,
  },
})
export default class Home extends Vue {}
</script>
