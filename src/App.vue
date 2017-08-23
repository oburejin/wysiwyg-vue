
<template>
  <div id="app">
    <Wysiwyg :blocks="blocks"></Wysiwyg>
  </div>
</template>

<script>
import Wysiwyg from './c/wysiwyg.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store.js';

const defaultState = {
  blocks: [
    {id: 0, type: 'stub A'}, 
    {id: 1, type: 'stub B'}, 
    {id: 2, type: 'stub C'}
  ]
};

export default {
  name: 'app',
  store,
  data: function () {
    return store.state
    
  },
  components: {
    'Wysiwyg': Wysiwyg
  }
}
</script>


<style lang="sass">
body
  margin: 0
  background-color: #eee
  font-family: PT Sans, sans-serif
.app
  max-width: 1004px
  width: 90%
  margin: 70px auto 50px
  padding: 10px
  background-color: #fff

.mod-flex
  display: flex

.hidden
  display: none
</style>
