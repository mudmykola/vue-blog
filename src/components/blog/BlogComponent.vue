<template>
  <div class="blog-box mt-7 position-relative">
    <div class="blog-box__panel">
      <div class="blog-box__panel--btn">
        <BlogBtnCreatePostComponent :openCreatePostDialog="openDialog"/>
      </div>
    </div>
    <BlogCreatePostDialog v-if="dialogVisible" @save="handleSavePost"/>
    <v-row align="stretch" class="justify-center">
      <v-col v-for="(post, index) in savedPosts" :key="index" cols="12" md="6" lg="4">
        <v-card class="saved-post" @click="showPostDetails(post)">
          <v-img height="200" v-if="post.imageUrl" :src="post.imageUrl" alt="Image"></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
          <p class="post-created-at">Created: {{ post.createdAt }}</p>
          <v-card-text>{{ post.text.slice(0, 100) }}{{ post.text.length > 100 ? '...' : '' }}</v-card-text>
          <v-chip v-for="(tag, tagIndex) in post.tags" :key="tagIndex" class="mr-2" outlined>{{ tag }}</v-chip>
          <v-btn color="error" class="mx-2 my-4" @click.stop="confirmDelete(index)">Delete</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <BlogPostDetails class="blog-post__details position-absolute " :post="selectedPost" v-if="showDetails" @close="closeDetails" />
    <v-dialog v-model="confirmDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Confirm Delete</v-card-title>
        <v-card-text>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text="text" @click="cancelDelete">Cancel</v-btn>
          <v-btn color="primary" @click="deleteConfirmed">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogBtnCreatePostComponent from "@/components/blog/BlogBtnCreatePostComponent.vue";
import BlogCreatePostDialog from "@/components/blog/BlogCreatePostDialog.vue";
import BlogPostDetails from "@/components/blog/BlogPostDetails.vue";

const dialogVisible = ref(false);
const savedPosts = ref([]);
const selectedPost = ref(null);
const showDetails = ref(false);
const confirmDialog = ref(false);
const password = ref('');

const openDialog = () => {
  dialogVisible.value = false;
  setTimeout(() => {
    dialogVisible.value = true;
  }, 100);
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const handleSavePost = (post) => {
  post.createdAt = new Date().toLocaleString();
  savedPosts.value.unshift(post);
  localStorage.setItem('posts', JSON.stringify(savedPosts.value));
  closeDialog();
};

const showPostDetails = (post) => {
  selectedPost.value = post;
  showDetails.value = true;
};

const closeDetails = () => {
  showDetails.value = false;
};

const confirmDelete = (index) => {
  selectedPost.value = index;
  confirmDialog.value = true;
};

const cancelDelete = () => {
  confirmDialog.value = false;
  password.value = '';
};

const deleteConfirmed = () => {
  if (password.value === '12345') {
    deletePost(selectedPost.value);
    confirmDialog.value = false;
    password.value = '';
  } else {
    console.log('Incorrect password');
  }
};

const deletePost = (index) => {
  savedPosts.value.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(savedPosts.value));
};

onMounted(() => {
  const localPosts = localStorage.getItem('posts');
  if (localPosts) {
    savedPosts.value = JSON.parse(localPosts);
  }
});
</script>

<style scoped>
.blog-box__panel--btn{
  margin-bottom: 20px;
}
.saved-post {
  margin-bottom: 20px;
}

.blog-post__details {
  top: 0;
}

.v-card-title {
  font-size: 18px;
}

.v-card-text {
  font-size: 14px;
}

.v-chip {
  font-size: 12px;
  margin-top: 5px;
}

.v-btn {
  font-size: 14px;
}

.post-created-at {
  font-size: 12px;
  color: #757575;
  padding-left: 16px;
  margin-top: 5px;
}
</style>
