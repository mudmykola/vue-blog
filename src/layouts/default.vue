<template>
  <div class="wrapper v-container ">
    <div class="navigation">
      <navigation-component/>
    </div>
    <main>
      <slot/>
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
</script>
