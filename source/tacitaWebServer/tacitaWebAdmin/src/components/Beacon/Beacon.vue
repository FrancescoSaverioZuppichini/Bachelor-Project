<template>
<resource>
  <div class='uk-flex uk-flex-column'>
    <div class='uk-margin-small-bottom'>
      <h5 class='uk-margin-remove'>{{`Beacon ${data.id}`}}</h5>
      <div class='uk-flex--grow uk-margin-right'>
      </div>
      <v-btn icon class='grey--text text--darken-2 my-card__actions uk-margin-remove'>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <div uk-dropdown="mode: click;pos: bottom-right">
        <ul class="uk-nav uk-dropdown-nav">
          <li><a @click="$store.actions.deleteBeacon(data)">Remove</a></li>
          <li><a @click="toogleEdit()">Edit</a></li>
        </ul>
      </div>
    </div>
    <div v-if="data.edit" class='uk-margin-small-top'>
      <input v-model="editBeacon.beacon_id" class="uk-input uk-form-small uk-margin-bottom" type="text" placeholder="change adress">
    </div>
    <div class='uk-margin-small-bottom' v-else>
      <h6 class='uk-margin-remove'>{{`Address: ${data.beacon_id}`}}</h6>
    </div>
    <div class='uk-flex uk-flex-middle' v-if='data.display_id'>
      <v-icon class='grey--text text--darken-2 uk-margin-small-right'>desktop_windows</v-icon>
      {{data.display_id}}
      <div class='uk-flex--grow'>

      </div>
      <!-- <div v-if="data.edit">
        <v-btn icon @click.native="editBeacon.display_id = null">
          <v-icon class='grey--text text--darken-2'>close</v-icon>
        </v-btn>
      </div> -->
    </div>
    <div v-if="data.edit" class='uk-margin-top uk-flex'>
      <v-btn default flat @click.native="toogleEdit">Cancel</v-btn>
      <div class='uk-flex--grow'>
      </div>
      <v-btn primary dark @click.native="$store.actions.editBeacon(editBeacon)">Done</v-btn>
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
      editBeacon: {}
    }
  },
  methods: {
    toogleEdit() {
      if (!this.data.edit) this.$set(this.data, 'edit', false)

      this.data.edit = !this.data.edit
      if (this.data.edit) {
        this.editBeacon = Object.assign({}, this.data)
      }
    }
  }
}
</script>
<style>
</style>
