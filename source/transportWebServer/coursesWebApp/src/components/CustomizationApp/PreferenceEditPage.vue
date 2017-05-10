<template>
<div class="">
  <!-- <h6>Change station  <router-link  class='uk-float-right' :to="{ path: 'station'}"> <span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link> </h6> -->
  <div class="uk-card">
    <h6>Change Faculty </h6>
    <div v-if="$store.state.preference.faculty" @click="$router.push({name: 'faculty'})">
      <div class="uk-card uk-card-default uk-card-body">
        <h5> {{$store.state.preference.faculty.name_en}}</h5>
      </div>
    </div>
    <h6>Change Study plan </h6>
    <div v-if="$store.state.preference.type" @click="$router.push({name:'study',params:{facultyId:$store.state.preference.faculty.id}})">
      <div class="uk-card uk-card-default uk-card-body">
        <h5>  {{$store.state.preference.type.type}}</h5>
      </div>
    </div>
    <h6>Change Study Type </h6>
    <div>
      <div class="uk-card uk-card-default uk-card-body" @click="$router.push({name:'studyType',params:{facultyId:$store.state.preference.faculty.id}})" v-if="this.$store.state.preference.studyType">
        <h5>  {{$store.state.preference.studyType.name_en}}</h5>
      </div>
    </div>
    <h6>Change Year </h6>
    <div v-if="$store.state.preference.year" @click="$router.push({name:'year',params:{facultyId:$store.state.preference.faculty.id}})">
      <h5>  {{$store.state.preference.year.yearNumber}}</h5>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
    <a class='uk-float-right uk-margin-small-right' @click="$store.actions.updateUserPreference($store.PreferenceStore.makeQueryFromPreference($store.state.preference))">Done</a>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    this.$store.state.navigation._urls = ['']
    var router = this.$router
    const guards = [
      function() {
        this.state.navigation.reset()
        router.go(-1)
        // router.push({
        //   name: 'edit',
        //   params: {
        //     id: this.state.preference.id
        //   }
        // })
      }
    ]
    this.$store.actions.setGuards(guards)

  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.path == `/app/preference/${this.$store.state.preference.id}/edit`) {
        this.$store.state.navigation.reset()
        this.$store.state.navigation._urls = ['']
        var router = this.$router
        const guards = [
          function() {
            this.state.navigation.reset()
            router.go(-1)
            // router.push({
            //   name: 'edit',
            //   params: {
            //     id: this.state.preference.id
            //   }
            // })
          }
        ]
        this.$store.actions.setGuards(guards)

      }
    }
  },
}
</script>
<style>
</style>
