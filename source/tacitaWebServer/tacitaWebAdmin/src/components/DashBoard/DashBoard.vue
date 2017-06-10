<template>
<div class='f-h uk-flex uk-offcanvas-content'>
  <div class='tm-sidebar-left uk-visible@s'>
    <ul class="uk-nav">
      <li><a @click="$router.push({name:'DisplayPage'})">Display</a></li>
      <li><a @click="$router.push({name:'BeaconPage'})">Beacon</a></li>
    </ul>
  </div>
  <keep-alive>
    <router-view class='uk-flex--grow'></router-view>
  </keep-alive>
  <div id="my-sidenav" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <v-btn icon large class='grey--text text--darken-2 uk-offcanvas-close'>
        <v-icon>close</v-icon>
      </v-btn>
      <h3></h3>

      <ul class="uk-nav uk-nav-default">
        <li><a @click="$router.push({name:'DisplayPage'})">Display</a></li>
        <li><a @click="$router.push({name:'BeaconPage'})">Beacon</a></li>
      </ul>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: "DashBoard",
  components: {

  },
  data: function data() {
    return {

    }
  },
  mounted() {
    this.$store.actions.fetchDisplays()
    this.$store.actions.fetchBeacons()
    this.$store.actions.fetchApplications()

  }
}
</script>
<style scoped>
.tm-sidebar-left {
  min-width: 200px !important;
  padding: 40px 24px 40px 24px;
}

.uk-offcanvas-bar {
  background: white !important;
}

.uk-nav>li>a {
  color: #666;
}

.uk-nav>li>a:hover {
  color: #222
}
</style>
