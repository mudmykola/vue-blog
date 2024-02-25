
import { defineStore } from 'pinia';

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [],
  }),
  actions: {
    posts: undefined,
    addPost(post) {
      this.posts.push(post);
    },
    getPosts() {
      return this.posts;
    },
  },
});
