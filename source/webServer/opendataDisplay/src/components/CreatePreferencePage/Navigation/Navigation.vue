<template>
<div class="uk-margin-top" id='navigation__actions'>
  <button class='uk-button uk-button-default uk-float-left uk-width-auto@m' @click="back" v-if="this.currentLink > 0">Back</button>
  <button class='uk-button uk-button-primary uk-float-right  uk-width-auto@m' @click="next">Next</button>
</div>
</template>
<script>
export default {
  name: "Navigation",
  props: ['links', 'whenFinishFunc'],
  data: function data() {
    return {
      currentLink: 0,
      done: false
    }
  },
  methods: {
    back() {
      console.log(this.currentLink--);
      // this.currentLink = this.currentLink-- % 0
      this.updateRoute()
    },
    next() {
        this.currentLink++
        if (this.currentLink == this.links.length) {
          console.log(this.whenFinishFunc);
          this.currentLink--
          this.whenFinishFunc()
        }
      else {
        this.updateRoute()
      }
    },
    updateRoute() {
      console.log(this.links[this.currentLink]);
      this.$router.push({
        path: this.links[this.currentLink]
      })
    }
  }
}
</script>
<style scoped>
#navigation__actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
