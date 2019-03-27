<template>
  <div class="row">
    <form class="col s12" v-on:submit.prevent="onSubmit">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" v-model="post.title">
          <label for="title" class="active">Title</label>
        </div>
        <div class="input-field col s12">
          <textarea id="body" class="materialize-textarea" v-model="post.body"></textarea>
          <label for="body" class="active">Body</label>
        </div>
        <div class="input-field col s12">
          <button class="btn waves-effect waves-light amber darken-2" type="submit" name="action">
            Update
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdatePost",
  data() {
    return {
      post: null
    };
  },
  mounted() {
    fetch(`http://localhost:3000/api/get/post/${this.$route.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.post = data[0];
      })
      .catch(err => {
        throw err;
      });
  },
  methods: {
    onSubmit() {
      fetch(`http://localhost:3000/api/update/post/${this.$route.params.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.post)
      })
        .then(res => {
          return res.json;
        })
        .then(data => {
          this.$router.push("/posts");
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>
