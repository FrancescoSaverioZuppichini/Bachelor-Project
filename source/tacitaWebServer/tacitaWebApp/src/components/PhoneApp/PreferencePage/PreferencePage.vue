<template>
<div class='f-h uk-flex-column uk-flex'>
  <nav-bar :home="true"></nav-bar>
  <iframe :src="src +'/' + $store.state.user.id" scrolling="yes" class='uk-flex--grow'></iframe>
</div>
</template>
<script>
import NavBar from '../NavBar/NavBar.vue'

export default {
  name: "",
  components: {
    NavBar
  },
  watch: {
    '$route.params': function() {
      this.src = this.$route.params.src
    }
  },
  data: function data() {
    return {
      src: this.$route.params.src,
      iframeContent: null
    }
  }
}
</script>
<style>
</style>
