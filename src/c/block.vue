<template>
  <div>
    <div class="block" :style="{backgroundColor: colors[this.block.id]}">
      Block #{{this.block.id}}
      <ControlPanel :position="this.index"></ControlPanel>
    </div>
    <AddBlock></AddBlock>
  </div>
</template>

<script>

import AddBlock from './add-block.vue';
import ControlPanel from './control-panel.vue';

export default {
  name: 'Block',
  props: ['block', 'index'],
  data () {    
    return {
      colors: ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#00bcd4', '#009688']

    }
  },
  components: {
    AddBlock,
    ControlPanel
  }
}
</script>


<style lang="sass">
.block
  position: relative
  display: block
  padding: 10px
  background-color: lightblue
  margin: 10px 0
  border-radius: 1px
  min-height: 70px
</style>
