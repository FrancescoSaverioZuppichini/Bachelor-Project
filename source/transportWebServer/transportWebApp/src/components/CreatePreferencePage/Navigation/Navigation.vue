<template>
<!-- <div class="uk-margin-top navigation__actions">
  <button class='uk-button uk-button-default uk-float-left uk-width-1-1' @click="back" v-if="this.currentLink > 0">Back</button>
  <button class='uk-button uk-button-primary uk-float-right  uk-width-1-1' @click="next">{{this.currentLink + 1 == this.links.length ? 'Done' : 'Next'}}</button>
</div> -->
</template>
<script>
export default {
  name: "Navigation",
  props: ['links', 'funcs', 'whenFinishFunc'],
  data: function data() {
    return {
      currentLink: 0,
      done: false
    }
  },
  created() {
    this.currentLink = this.links.indexOf(this.$route.path)
  },
  methods: {
    back() {
      this.currentLink--
        // this.currentLink = this.currentLink-- % 0
        this.updateRoute()
    },
    next() {
      this.currentLink++
        if (this.currentLink == this.links.length) {
          this.currentLink = 0
          this.whenFinishFunc()
        }
      else {
        this.updateRoute()
      }
    },
    updateRoute() {
      this.$router.push({
        path: this.links[this.currentLink]
      })
    }
  }
}
</script>
<style >
.navigation__actions {
  position: absolute;
  padding-bottom: 8px;
  padding-top: 8px;

  background-color: white;
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0
}
</style>
