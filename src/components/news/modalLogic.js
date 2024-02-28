import { ref, onMounted } from 'vue';

export const posts = ref([]);
export const modal = ref(false);
export const selectedPost = ref({});
export const favoritePosts = ref([]);

export const fetchPosts = async () => {
  try {
    const response = await fetch('https://test-api-mudmykola.vercel.app/post-api.json');
    const data = await response.json();
    posts.value = data.map(post => ({
      ...post,
      likes: 0,
      dislikes: 0,
      liked: false,
      disliked: false,
      favorite: false
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const openModal = (post) => {
  selectedPost.value = post;
  modal.value = true;
};

export const closeModal = () => {
  modal.value = false;
};

export const like = (postId) => {
  const post = selectedPost.value;
  if (!post.liked) {
    post.likes++;
    post.liked = true;
    if (post.disliked) {
      post.dislikes--;
      post.disliked = false;
    }
  } else {
    post.likes--;
    post.liked = false;
  }
};

export const dislike = (postId) => {
  const post = selectedPost.value;
  if (!post.disliked) {
    post.dislikes++;
    post.disliked = true;
    if (post.liked) {
      post.likes--;
      post.liked = false;
    }
  } else {
    post.dislikes--;
    post.disliked = false;
  }
};

export const toggleFavorite = (postId) => {
  const post = posts.value.find(post => post.id === postId);
  if (post) {
    post.favorite = !post.favorite;
    if (post.favorite) {
      favoritePosts.value.push(post);
    } else {
      const index = favoritePosts.value.findIndex(p => p.id === postId);
      if (index !== -1) {
        favoritePosts.value.splice(index, 1);
      }
    }
  }
};
