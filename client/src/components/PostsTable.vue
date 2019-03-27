<template>
  <table class="striped centered">
    <thead>
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Body</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Title One</td>
        <td>Body 1</td>
        <td>
          <router-link :to="'/post/1'">
            <i class="material-icons">create</i>
          </router-link>
          <a href="#">
            <i class="material-icons">delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PostTable"
};
</script>

