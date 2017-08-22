
<template>
  <div id="app">
    <Wysiwyg :blocks="blocks"></Wysiwyg>
  </div>
</template>

<script>
import Wysiwyg from './c/wysiwyg.vue';
import Vue from 'vue';
import Vuex from 'vuex';

const defaultState = {
  blocks: [
    {id: 0, type: 'stub A'}, 
    {id: 1, type: 'stub B'}, 
    {id: 2, type: 'stub C'}
  ]
};

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    blocks: [
    {id: 0, type: 'stub A'}, 
    {id: 1, type: 'stub B'}, 
    {id: 2, type: 'stub C'}
  ]
  },
  mutations: {
    test: (state, payload) => {console.log('test mutation', payload.index);},
    move_top: (state, payload) => {
      console.log('move_top', payload.index);
      const index = payload.index;
      state.blocks = state.blocks.splice(index, 1).concat(state.blocks);
      return state;
     },   
    move_up: (state, payload) => {
      const index = payload.index;
      console.log('move_up', index);
      if(index < 1) {return state;}
      const el = state.blocks.splice(index, 1)[0];
      state.blocks.splice(index - 1, 0, el);
      return state;
      },
    move_down: (state, payload) => {
      const index = payload.index;
      console.log('move_down', index);
      if(index > state.blocks.length - 2) {return state;}
      console.log('move')
      const el = state.blocks.splice(index, 1)[0];
      state.blocks.splice(index + 1, 0, el);
      return state;
      },
    move_bottom: (state, payload) => {
      console.log('move_bottom', payload.index);
      const index = payload.index;
      const el = state.blocks.splice(index, 1);
      state.blocks = state.blocks.concat(el);
      return state;
    },
  }
});

export default {
  name: 'app',
  store,
  data () {
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
