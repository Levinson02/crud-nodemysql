<template>
  <nav class="amber darken-2">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo">CRUD App</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/add-post">Add Post</router-link>
        </li>
        <li>
          <router-link to="/posts">All Posts</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
