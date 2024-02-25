<template>
  <div class="blog-post__dialog">
    <v-dialog v-model="dialogVisible" max-width="600px">
      <v-card>
        <v-card-title>Creating a post</v-card-title>
        <v-card-text>
          <v-text-field v-model="title" label="Title"></v-text-field>
          <v-textarea v-model="text" label="Text"></v-textarea>
          <v-select v-model="selectedTags" :items="availableTags" label="Select tags" multiple></v-select>
          <input type="file" @change="handleFileUpload" accept="image/*">
          <v-img v-if="imageUrl" :src="imageUrl" width="200" height="200"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="savePost">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits();
const availableTags = ['Технології', 'Спорт', 'Мода', 'Культура', 'Подорожі'];
const dialogVisible = ref(true);
const title = ref('');
const text = ref('');
const selectedTags = ref([]);
const imageUrl = ref('');

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageUrl.value = reader.result;
  };
  reader.readAsDataURL(file);
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const savePost = () => {
  const post = {
    title: title.value,
    text: text.value,
    imageUrl: imageUrl.value,
    tags: selectedTags.value
  };
  emit('save', post);
  closeDialog();
};
</script>
