<script setup lang="ts">
import { ref, reactive } from 'vue';
import '@/assets/index.less';

const val = ref<string>('this is test typescript');

</script>

<template>
  <div>hello myWebpack 555</div>
  {{ val }}
</template>

<style scoped></style>
