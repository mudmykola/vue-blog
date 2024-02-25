<template>
  <div class="contact">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>My Info</v-card-title>
            <v-card-text>
              <v-avatar size="150">
                <img class="avatar-img" src="/src/assets/images/nicolas-horn-MTZTGvDsHFY-unsplash.jpg" alt="Avatar">
              </v-avatar>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> johndoe@example.com</p>
              <p><strong>Phone:</strong> +1234567890</p>
              <p><strong>Social Media:</strong></p>
              <v-row class="d-flex align-center justify-center">
                <v-col  v-for="(social, index) in socialMedia" :key="index" cols="4">
                  <v-btn  icon="icon" :href="social.link" target="_blank">
                    <v-icon>{{ getIcon(social.name) }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>


            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>Contact Form</v-card-title>
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea v-model="message" label="Message"></v-textarea>
                <v-btn color="primary" @click="sendMessage">Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const socialMedia = [
  {name: 'Facebook', link: 'https://www.facebook.com/johndoe'},
  {name: 'Twitter', link: 'https://twitter.com/johndoe'},
  {name: 'Instagram', link: 'https://www.instagram.com/johndoe'},

];

const sendMessage = () => {

  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Message:', message.value);
};

const getIcon = (name) => {
  switch (name) {
    case 'Facebook':
      return 'mdi-facebook';
    case 'Twitter':
      return 'mdi-twitter';
    case 'Instagram':
      return 'mdi-instagram';
    default:
      return '';
  }
};
</script>

<style scoped>
.contact {
  padding: 20px;
}

.avatar-img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}
</style>
