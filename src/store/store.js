import Vue from 'vue';
import Vuex from 'vuex';
// import block from './modules/block';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    next_block_id: 3,
    blocks: [
      {id: 0, type: 'ElementStub'}, 
      {id: 1, type: 'ElementStub'}, 
      {id: 2, type: 'ElementText'}
    ]
  },
  mutations: {
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
    add_block: (state, payload) => {
      console.log('add_block', payload);
      const position = payload.position;
      state.blocks.splice(position + 1, 0, {id: state.next_block_id, type: payload.type});
      state.next_block_id++;
      return state;
    }
  }
  
});