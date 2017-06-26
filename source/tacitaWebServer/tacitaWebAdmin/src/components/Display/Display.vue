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
          <li><a @click="$store.actions.editDisplay(data)">Edit</a></li>
        </ul>
      </div>
    </div>
    <!-- applications  -->
    <div class='uk-flex'>
      <div class="uk-flex" v-for="application in data.apps">
        <div class='uk-flex uk-flex-middle'>
          <v-icon class="grey--text text--darken-2 uk-margin-small-right">{{application.material_icon}}</v-icon>
          <h5 class='uk-margin-remove'>{{application.name.toUpperCase()}}</h5>
        </div>
      </div>
      <div class='uk-flex--grow'>
      </div>
      <!-- <div v-if="!data.editApplications">
        <v-btn icon class='grey--text text--darken-2' @click.native="$store.actions.toogleDisplayApplicationsEdit(data)" v-if="!data.editApplications">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn icon class='grey--text text--darken-2' @click.native="$store.actions.toogleDisplayApplicationsEdit(data)" v-else>
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </div> -->
    </div>
    <div v-if="data.editApplications">
      <div class='uk-margin-small-bottom uk-margin-small-top'>
        <p class='uk-text-meta uk-margin-remove'>
          Change application
        </p>
      </div>
      <div class='uk-flex'>
        <div v-for="application in $store.state.applications.data" class='uk-margin-small-right'>
          <v-btn icon @click.native="$store.actions.changeApp(data,application)"  :title="application.name" uk-tooltip>
            <v-icon class="grey--text text--darken-2 ">{{application.material_icon}}</v-icon>
          </v-btn>
          <!-- <div uk-dropdown>{{application.name}}</div> -->

        </div>
        <div class='uk-flex--grow'>
        </div>
      </div>
    </div>
    <div class='uk-margin-small-bottom'>

    </div>
    <!-- beacons  -->
    <draggable v-model="beacons" class='display-beacon__container uk-flex uk-grid-small' :options="{group:'people',filter: '.ignore'}" uk-grid @start="start" @end="end">
      <!-- <div v-show="beacons.length <= 0" class='disabled'>
        Drag here beacons to link them
      </div> -->
      <div v-for="beacon in beacons" :key='beacon'>
        <div class='beacon-icon'>
        </div>
        <div uk-dropdown="mode: hover">
          <div class='uk-flex uk-flex-column'>
            <div class='uk-margin-small-bottom'>
              <p class='uk-margin-remove'>
                {{`Beacon ${beacon.id}`}}
              </p>
            </div>
            <div>
              <p class='uk-text-meta uk-margin-remove'>
                Mac address
              </p>
              <p class='uk-margin-remove'>
                {{beacon.beacon_id}}
              </p>
            </div>
          </div>
        </div>

        <div class='uk-text-center'>
          {{beacon.id}}
        </div>
      </div>
    </draggable>
  </div>
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
      drag: false,
      editApplication: false
    }
  },
  methods: {
    start() {
      console.log('is dragging out');
      this.$store.state.isDraggingBeacon = true
    },
    end() {
      console.log('end');

      this.$store.state.isDraggingBeacon = false
    }
  },
  computed: {
    beacons: {
      get() {
        return this.data.beacons()
      },
      set(value) {
        for (let beacon of value) {
          if (beacon.display_id == null) {
            const newBeacon = Object.assign({}, beacon)
            newBeacon.display_id = this.data.id
            this.$store.actions.editBeacon(newBeacon)
          }
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
