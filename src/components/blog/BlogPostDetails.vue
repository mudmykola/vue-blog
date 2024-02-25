<template>
  <div class="post-details">
    <v-card class="details-card">
      <img width="100%"  v-if="post.imageUrl" :src="post.imageUrl" alt="Image">
      <v-card-title class="title">{{ post.title }}</v-card-title>
      <v-chip  v-for="(tag, tagIndex) in post.tags" :key="tagIndex" class="tag ma-0 ml-3" outlined>{{ tag }}</v-chip>
      <v-card-text class="text">{{ post.text }}</v-card-text>
      <div class="d-flex align-center justify-end">

        <v-btn class="close-btn" @click="closeDetails">Close</v-btn>
      </div>

    </v-card>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  post: Object
});

const emit = defineEmits();

const closeDetails = () => {
  emit('close');
};
</script>

<style scoped>
.post-details {
  padding: 20px;
}

.details-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.text {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.tag {
  font-size: 14px;
  color: #999;
  background-color: #f3f3f3;
  margin-right: 5px;
  margin-bottom: 5px;
}

.close-btn {
  margin-top: auto;
  align-self: flex-end;
  background-color: #ff5722;
  color: #fff;
  margin-top: 10px;
}

.close-btn:hover {
  background-color: #f44336;
}
</style>
