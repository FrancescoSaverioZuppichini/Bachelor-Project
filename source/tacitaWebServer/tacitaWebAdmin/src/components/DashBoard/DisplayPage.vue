<template>
<page title="Display">
  <div class='uk-flex--grow'>
    <div class="uk-text-center uk-margin-large-top" v-if="$store.state.displays.data.length <= 0">
      <h6 class='uk-text-meta uk-text-large'>No displays</h6>
    </div>
    <resources-wrapper :data='$store.state.displays'>

      <display :data="el" v-for="el in $store.state.displays.data"></display>
    </resources-wrapper>
  </div>
  <transition name="fade">
    <div uk-modal="center: true" class="uk-modal uk-open uk-flex uk-flex-center uk-flex-middle" v-show="$store.state.showCreateDisplayModal">
      <div class="uk-modal-dialog uk-modal-body">
        <h4>Create a new display?</h4>
        <div>
          <v-btn default flat @click.native="$store.state.showCreateDisplayModal = false">Cancel</v-btn>
          <v-btn primary dark @click.native="$store.actions.createDisplay({})">Yes</v-btn>
        </div>
      </div>
    </div>
  </transition>
  <div class='unlinked-beacon__container'>
    <h4 class='uk-margin-small-bottom'>Unliked Beacons</h4>
    <draggable v-model="beacons" class='display-beacon__container uk-flex uk-grid-small' :options="{group:'people',filter: '.ignore'}" uk-grid>
      <!-- <div class="ignore">
        ignore
      </div> -->
      <div v-for="beacon in beacons" :key='beacon'>
        <div class='beacon-icon'>
        </div>
        <div class='uk-text-center'>
          {{beacon.beacon_id}}
        </div>
      </div>
    </draggable>
  </div>
  <v-btn floating primary @click.native="$store.state.showCreateDisplayModal = true" class='floating-btn'>
    <v-icon dark>add</v-icon>
  </v-btn>
</page>
</template>
<script>
import draggable from 'vuedraggable'
import ResourcesWrapper from '../Resources/ResourcesWrapper.vue'
import Display from '../Display/Display.vue'
import Page from '../Page/Page.vue'

export default {
  name: "DashBoard",
  components: {
    ResourcesWrapper,
    Display,
    Page,
    draggable
  },
  data: function data() {
    return {

    }
  },
  mounted() {
    this.$store.actions.fetchDisplays()
    this.$store.actions.fetchBeacons()
  },
  computed: {
    beacons: {
      get() {
        return this.$store.state.freeBeacons()
      },
      set(value) {
        for (let beacon of value) {
          if (beacon.display_id != null) {
            const newBeacon = Object.assign({}, beacon)
            newBeacon.display_id = null
            this.$store.actions.editBeacon(newBeacon)
          }
        }
      }
    }
  }
}
</script>
<style>
.unlinked-beacon__container {
  background-color: white;
  width: 100%;
  padding: 16px;
}
</style>
