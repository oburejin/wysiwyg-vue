<template>
  <div class="app">
    <h2 class="app-title">Vue</h2>
    <Block v-for="(block, index) in this.blocks" 
           :key="block.id" 
           :index="index"
           :block="block"
    ></Block>
  </div>
</template>

<script>
import Block from './block.vue';
export default {
  name: 'Wysiwyg',
  props: ['blocks'],
  data () {  
    return {

    }
  },
  components: {
    Block
  }  
}
</script>

<style lang="sass">
.app
  outline: 5px solid #41b883
  background-color: rgba(#41b883, 0.3)

.app-title
  margin-top: 0
</style>
