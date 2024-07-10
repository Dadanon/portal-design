<template>
  about
  <el-calendar v-model="value" />
</template>

<style></style>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>
