<script setup>
import {ref} from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <div class="navigation">
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <router-link class="text-decoration-none text-black" to="/">Vue Blog</router-link>
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item class="font-weight-black" link to="/" prepend-icon="mdi-home" title="Home" value="home">
        </v-list-item>

        <v-list-item class="font-weight-black" link to="/about" prepend-icon="mdi-account" title="About" value="about">
        </v-list-item>

        <v-list-item class="font-weight-black" link to="/news" prepend-icon="mdi-post" title="News" value="news">
        </v-list-item>

        <v-list-item class="font-weight-black" link to="/contact" prepend-icon="mdi-email" title="Contact" value="contact" >
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>
