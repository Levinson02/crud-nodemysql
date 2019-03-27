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
      <tr v-for="(record,index) in records" :key="record.id">
        <td>{{ index+1 }}</td>
        <td>{{ record.title }}</td>
        <td>{{ record.body }}</td>
        <td>
          <router-link :to="'/post/'+record.id">
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
  name: "PostTable",
  data() {
    return {
      records: null
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/get/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.records = data;
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>

