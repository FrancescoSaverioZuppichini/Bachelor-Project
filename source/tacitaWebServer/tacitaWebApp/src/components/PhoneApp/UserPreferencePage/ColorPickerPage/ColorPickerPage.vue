<template>
<page>
  <div id="ColorPicker" class='uk-flex-column uk-flex-center uk-margin-top'>
    <h4 class='uk-text-center'>Pick a new color</h4>
    <choice-color :colors='colors' radius='10em' @updateColor='updateColor'></choice-color>
    <div class="bottom-container--absolute uk-flex uk-flex-center" :style="{'bottom':'60px'}">
      <v-btn primary light @click.native="done()">Done</v-btn>
    </div>
  </div>
</page>
</template>
<script>
import Page from '../../Page.vue'
import {
  choiceColor
} from 'vue-circle-choice'

const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#009688',
  '#4CAF50',
  '#FFEB3B',
  '#FF9800',
  '#795548',
  '#607D8B',
];

export default {
  name: "",
  components: {
    choiceColor,
    Page
  },
  data() {
    return {
      colors,
      index: 0,
      color: colors[0],
    }
  },
  methods: {
    done() {
      this.$store.actions.updateUser(this.$store.state.user)
      this.$router.go(-1)
    },
    updateColor({
      index,
      color
    }) {
      this.index = index;
      this.color = color;
      this.$store.state.user.color = color
    }
  }

}
</script>
<style scoped>

</style>
