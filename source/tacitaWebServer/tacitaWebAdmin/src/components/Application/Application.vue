<template>
<resource>
  <div class='uk-flex uk-flex-column'>
    <div class='uk-margin-small-bottom'>
      <div class='uk-flex uk-flex-middle' v-if="!data.edit">
        <v-icon class="grey--text text--darken-2 uk-margin-small-right">{{data.material_icon}}</v-icon>

        <h5 class='uk-margin-remove'>{{`${data.name}`}}</h5>
      </div>
      <div v-if="data.edit" class='uk-margin-small-top'>
        <input v-model="editApplication.name" class="uk-input uk-form-small uk-margin-bottom" type="text" placeholder="Change name">
        <input v-model="editApplication.material_icon" class="uk-input uk-form-small uk-margin-bottom" type="text" placeholder="Change icon">
      </div>
      <div class='uk-flex--grow uk-margin-right'>
      </div>
      <v-btn icon class='grey--text text--darken-2 my-card__actions uk-margin-remove'>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <div uk-dropdown="mode: click;pos: bottom-right">
        <ul class="uk-nav uk-dropdown-nav">
          <li><a @click="$store.actions.removeApplication(data)">Remove</a></li>
          <li><a @click="toogleEdit()">Edit</a></li>
        </ul>
      </div>
      <div v-if='data.description_en' class='uk-margin-small-top'>
        {{data.description_en}}
      </div>
    </div>
    <div v-if="data.edit" class='uk-margin-top uk-flex'>
      <v-btn default flat @click.native="toogleEdit">Cancel</v-btn>
      <div class='uk-flex--grow'>
      </div>
      <v-btn primary dark @click.native="$store.actions.editApplication(editApplication)">Done</v-btn>
    </div>
  </div>
</resource>
</template>
<script>
import Resource from '../Resources/Resource.vue'

export default {
  name: "Beacon",
  components: {
    Resource
  },
  props: ['data'],
  data: function data() {
    return {
      edit: false,
      editApplication: {}
    }
  },
  methods: {
    toogleEdit() {
      if (!this.data.edit) this.$set(this.data, 'edit', false)

      this.data.edit = !this.data.edit
      if (this.data.edit) {
        this.editApplication = Object.assign({}, this.data)
      }
    }
  }
}
</script>
<style>
</style>
