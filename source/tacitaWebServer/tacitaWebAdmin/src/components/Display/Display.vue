<template>
<resource>
  <div class='uk-flex uk-flex-column'>
    <div class='uk-flex uk-flex-middle uk-margin-bottom'>
      <v-icon class='grey--text text--darken-2 uk-margin-small-right'>desktop_windows</v-icon>
      <h3 class='uk-margin-remove'>{{"Display " + data.id}}</h3>
      <div class='uk-flex--grow uk-margin-right'>
      </div>
      <v-btn icon class='grey--text text--darken-2 my-card__actions uk-margin-remove'>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <div uk-dropdown="mode: click;pos: bottom-right">
        <ul class="uk-nav uk-dropdown-nav">
          <li><a @click="$store.actions.deleteDisplay(data)">Remove</a></li>
          <li><a >Edit</a></li>
        </ul>
      </div>
    </div>
    <div v-show="beacons.length <= 0">
      Drag here beacons to link them
    </div>
    <draggable v-model="beacons" class='display-beacon__container' :options="{group:'people'}">
      <div v-for="beacon in beacons" :key='beacon'>
        {{beacon.beacon_id}}
      </div>
    </draggable>
  </div>
</resource>
</div>
</template>
<script>
import draggable from 'vuedraggable'
import Resource from '../Resources/Resource.vue'
export default {
  name: "",
  components: {
    Resource,
    draggable
  },
  props: ['data'],
  data: function data() {
    return {
      drag: false
    }
  },
  methods: {
    onChange(change) {
      console.log(change);
    },
    onAdd(item) {
      console.log(item);
    }
  },
  computed: {
    beacons: {
      get() {
        return this.data.beacons()
      },
      set(value) {
        console.log(value, this.data.id);
        if (value.length > 0 && value[0].display_id != this.data.id) {
          const newBeacon = Object.assign({}, value[0])
          newBeacon.display_id = this.data.id

          this.$store.actions.editBeacon(newBeacon)
        }
      }
    }
  }
}
</script>
<style>
.display-beacon__container {
  min-height: 24px;
}
</style>
