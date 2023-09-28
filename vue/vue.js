"use strict";
const app = Vue.createApp({
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.loaded();
  },
  methods: {
    async loaded() {
      try {
        const req = await fetch("https://reqres.in/api/users?per_page=10");
        const res = await req.json();

        this.users = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

app.mount("#app");
