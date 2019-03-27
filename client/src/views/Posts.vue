<template>
  <section class="posts">
    <h3 class="center-align">Posts works</h3>
    <PostsTable/>
  </section>
</template>

<script>
import PostsTable from "@/components/PostsTable.vue";

export default {
  components: {
    PostsTable
  }
};
</script>