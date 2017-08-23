export default {
  state: {
    a: 0
  },
  mutations: {
    test: (state, payload, rootState) => {
      console.log('test mutation', state, payload.index, rootState);
    }
  }
};