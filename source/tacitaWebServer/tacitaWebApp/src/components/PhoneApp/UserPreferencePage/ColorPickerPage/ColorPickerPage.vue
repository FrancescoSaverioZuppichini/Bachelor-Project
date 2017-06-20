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
'#FF5722',
'#F44336',
'#880E4F',
'#9C27B0',
'#1c2899',
'#2196F3',
'#00BCD4',
'#4CAF50',
'#CDDC39',
'#FFEB3B',
'#FFC107',
'#FF9800'
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
