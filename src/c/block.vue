<template>
  <div>
    <div class="block" :style="{backgroundColor: colors[this.block.id]}">
      Block #{{this.block.id}}
      <component :is="type"></component>
      <ControlPanel :position="this.index"></ControlPanel>
    </div>
    <AddBlock :position="this.index"></AddBlock>
  </div>
</template>

<script>
import Vue from 'vue';
import AddBlock from './add-block.vue';
import ControlPanel from './control-panel.vue';
import ElementStub from './element-stub.vue';
import ElementText from './element-text.vue';

export default {
  name: 'Block',
  props: ['block', 'index'],
  data: function () {
    return {
      type: this.block.type,
      colors: ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#00bcd4', '#009688']

    }
  },
  components: {
    AddBlock,
    ControlPanel,
    ElementStub,
    ElementText
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
