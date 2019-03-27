<template>
  <div class="row">
    <form class="col s12" v-on:submit.prevent="onSubmit">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" v-model="fields.title">
          <label for="title">Title</label>
        </div>
        <div class="input-field col s12">
          <textarea id="body" class="materialize-textarea" v-model="fields.body"></textarea>
          <label for="body">Body</label>
        </div>
        <div class="input-field col s12">
          <button class="btn waves-effect waves-light amber darken-2" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewPost",
  data() {
    return {
      fields: {}
    };
  },
  methods: {
    onSubmit() {
      fetch("http://localhost:3000/api/create/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.fields)
      })
        .then(res => {
          return res.json;
        })
        .then(data => {
          this.fields = "";
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>
