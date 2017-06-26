<template>
<page title="Application">
  <div class='uk-flex--grow'>
    <div class="uk-text-center uk-margin-large-top" v-if="$store.state.applications.data.length <= 0">
      <h6 class='uk-text-meta uk-text-large'>No Applications</h6>
    </div>
    <resources-wrapper :data='$store.state.applications'>
      <application :data="el" v-for="el in $store.state.applications.data"></application>
    </resources-wrapper>
  </div>
  <v-btn floating primary @click.native="$store.state.showCreateDisplayModal = true" class='floating-btn'>
    <v-icon dark>add</v-icon>
  </v-btn>
  <transition name="fade">
    <div uk-modal="center: true" class="uk-modal uk-open uk-flex uk-flex-center uk-flex-middle" v-show="$store.state.showCreateDisplayModal">
      <div class="uk-modal-dialog uk-modal-body">
        <h4>Create a new application?</h4>
        <input v-model="newApplication.name" class="uk-input uk-margin-bottom" type="text" placeholder="Name" :class="{'uk-form-danger':   newApplication.toogle && newApplication.name == ''}">
        <input v-model="newApplication.material_icon" class="uk-input uk-margin-bottom" type="text" placeholder="Icon" :class="{'uk-form-danger':   newApplication.toogle && newApplication.material_icon == ''}">
        <input v-model="newApplication.url" class="uk-input uk-margin-bottom" type="text" placeholder="Url" :class="{'uk-form-danger':   newApplication.toogle && newApplication.url == ''}">
        <hr />
        <p>
          Optional
        </p>

        <input v-model="newApplication.description_en" class="uk-input uk-margin-bottom" type="text" placeholder="Description English">
        <input v-model="newApplication.description_it" class="uk-input uk-margin-bottom" type="text" placeholder="Description Italian">

        <div>
          <v-btn default flat @click.native="$store.state.showCreateDisplayModal = false">Cancel</v-btn>
          <v-btn primary dark @click.native="createApplication()">Yes</v-btn>
        </div>
      </div>
    </div>
  </transition>
</page>
</template>
<script>
import Page from '../Page/Page.vue'
import Application from '../Application/Application.vue'
import ResourcesWrapper from '../Resources/ResourcesWrapper.vue'

export default {
  name: "",
  components: {
    ResourcesWrapper,
    Application,
    Page
  },
  watch: {
    '$store.state.showCreateDisplayModal': function(from, to) {
      this.newApplication = {
        application_id: null,
        toogle: false,
        name: '',
        material_icon: '',
        url: ''

      }
    }
  },
  data: function data() {
    return {
      newApplication: {
        application_id: null,
        toogle: false

      },
      toogle: false

    }
  },
  methods: {
    createApplication() {
      this.newApplication.toogle = true
      this.$store.actions.createApplication(this.newApplication)

    }
  }
}
</script>
<style>
</style>
