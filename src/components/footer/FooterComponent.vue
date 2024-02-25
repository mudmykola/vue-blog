<template>
  <v-footer class="footer" app>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </v-col>
        <v-col cols="12" md="6">
          <h3>Contact Us</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #333;
}

.footer h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.footer p {
  margin-bottom: 10px;
}
</style>
