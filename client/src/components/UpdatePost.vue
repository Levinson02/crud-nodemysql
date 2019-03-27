<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate">
          <label for="title">Title</label>
        </div>
        <div class="input-field col s12">
          <textarea id="body" class="materialize-textarea"></textarea>
          <label for="body">Body</label>
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
  name: "UpdatePost"
};
</script>
