
import { defineStore } from 'pinia';

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [],
  }),
  actions: {
    setPosts(posts) {
      this.posts = posts;
    },
    posts: undefined,
    addPost(post) {
      this.posts.push(post);
    },
    getPosts() {
      return this.posts;
    },
  },
});
