<template>
  <div class='control-panel'>
        {{this.position}}
        <button @click="$store.commit('move_top', {index: position})">⇞</button>
        <button @click="$store.commit('move_up', {index: position})">↑</button>
        <button @click="$store.commit('move_down', {index: position})">↓</button>
        <button @click="$store.commit('move_bottom', {index: position})">⇟</button>
      </div>
</template>
<script>
export default {
  name: 'ControlPanel',
  props: ['position'],
  data: function () {
    return {
    }
  }
}
</script>
<style lang="sass">
.control-panel
  position: absolute
  top: 2px
  right: 2px
</style>
