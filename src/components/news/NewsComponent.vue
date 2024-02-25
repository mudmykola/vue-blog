<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
        <v-card class="post-card" elevation="2">
          <v-img :src="post.image" height="200px" class="rounded-top" @click="openModal(post)"></v-img>
          <v-card-title class="headline" @click="openModal(post)">{{ post.title }}</v-card-title>
          <v-card-text>{{ truncateText(post.content) }}</v-card-text>
          <v-card-actions class="d-flex justify-space-between align-center px-3">
            <v-chip class="post-tag" color="primary">{{ post.tag }}</v-chip>
            <v-btn text class="read-more-btn" color="white" @click="openModal(post)">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal" max-width="800">
      <v-card>
        <v-img :src="selectedPost.image" height="400px" class="rounded-top"></v-img>
        <v-card-title>{{ selectedPost.title }}</v-card-title>
        <v-card-text>{{ selectedPost.content }}</v-card-text>
        <v-card-actions>
          <div class="like-dislike-buttons">
            <v-btn icon @click="like(selectedPost.id)">
              <v-icon :color="selectedPost.liked ? 'primary' : ''">mdi-thumb-up</v-icon>
            </v-btn>
            <span>{{ selectedPost.likes }}</span>
            <v-btn icon @click="dislike(selectedPost.id)">
              <v-icon :color="selectedPost.disliked ? 'primary' : ''">mdi-thumb-down</v-icon>
            </v-btn>
            <span>{{ selectedPost.dislikes }}</span>
          </div>
          <v-btn color="primary" text @click="closeModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { posts, modal, selectedPost, fetchPosts, truncateText, openModal, closeModal, like, dislike } from './modalLogic';

onMounted(fetchPosts);
</script>

<style src="./modalStyles.css" scoped></style>
