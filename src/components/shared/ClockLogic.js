import { ref } from 'vue';

const currentTime = ref('');

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

setInterval(() => {
  currentTime.value = getCurrentTime();
}, 1000);

export { currentTime };
