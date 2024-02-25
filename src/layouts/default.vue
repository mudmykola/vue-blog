<template>
  <div class="wrapper v-container ">
    <div class="navigation">
      <navigation-component/>
    </div>
    <main>
      <slot/>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script setup>
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
</script>
