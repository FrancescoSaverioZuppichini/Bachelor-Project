<template>
<iframe :src="src" scrolling="yes"></iframe>
</template>
<script>
export default {
  name: "",
  watch: {
    '$route.params': function() {
      this.src = this.$route.params.src
    }
  },
  data: function data() {
    return {
      src: this.$route.params.src
    }
  }
}
</script>
<style>
</style>
