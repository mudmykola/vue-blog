<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="post in favoritePosts" :key="post.id" cols="12" md="6" lg="4">
          <v-card class="post-card" elevation="2" @click="openModal(post)">
            <v-img :src="post.image" height="200px" class="rounded-top"></v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ truncateText(post.content) }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="modal" max-width="800">
      <v-card>
        <v-img :src="selectedPost.image" height="400px" class="rounded-top"></v-img>
        <v-card-title>{{ selectedPost.title }}</v-card-title>
        <v-card-text>{{ selectedPost.content }}</v-card-text>
        <v-btn @click="closeModal">Close</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {favoritePosts} from '../news/modalLogic';
import {usePostsStore} from '@/store/posts';

const postsStore = usePostsStore();
const posts = computed(() => postsStore.posts);

const modal = ref(false);
const selectedPost = ref({});

const openModal = (post) => {
  selectedPost.value = post;
  modal.value = true;
};

const closeModal = () => {
  modal.value = false;
};

const truncateText = (text) => {
  const maxLength = 100;
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
</script>
