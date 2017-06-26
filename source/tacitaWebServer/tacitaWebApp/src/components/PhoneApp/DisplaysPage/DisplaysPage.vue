<template>
<page>
  <vue-pull-refresh :on-refresh="onRefresh" class='uk-flex-column uk-flex f-h'>
    <div class='uk-flex-column uk-flex f-h'>
      <display-wrapper class='uk-flex--grow' :displays="$store.state.nearbyDisplay.data"></display-wrapper>
    </div>
    <div id="screen-reflesh__container">
      <v-btn primary floating dark  @click.native="onRefresh()">
        <v-icon>replay</v-icon>
      </v-btn>
    </div>
  </vue-pull-refresh>
</page>
</template>

<script>
import DisplayWrapper from './DisplayWrapper/DisplayWrapper.vue'
import VuePullRefresh from '../VuePullReflesh.vue'
import Page from '../Page.vue'

export default {
  name: "",
  components: {
    DisplayWrapper,
    Page,
    'vue-pull-refresh': VuePullRefresh
  },
  data: function data() {
    return {

    }
  },
  methods: {
    onRefresh: function() {
      const displays = this.$store.state.nearbyDisplay.data

      return this.$store.actions.fetchDisplays(displays.map(disp => disp.id))

    }
  }
}
</script>
<style scoped>
#screen-reflesh__container {
  position: absolute;
  z-index: 3;
  right: 16px;
  bottom: 16px;
}
</style>
