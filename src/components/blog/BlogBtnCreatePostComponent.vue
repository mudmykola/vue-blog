<template>
  <div>
    <v-btn color="#5865f2" prepend-icon="mdi-plus" variant="flat" @click="openCreatePostDialog">Create Post</v-btn>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { openCreatePostDialog } = defineProps(['openCreatePostDialog']);
</script>
