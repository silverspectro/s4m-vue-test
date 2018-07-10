import config from '@/config/config';

const userRoute = `${config.uris.ROOT}${config.uris.users}`;

export default ({
  state: {
    users: [],
    error: {},
    loading: false,
  },
  mutations: {
    'set:users': (state, payload) => { state.users = payload; },
    'error:users': (state, payload) => { state.error = payload; },
    'loading:users': (state, payload) => { state.loading = payload; },
    'error:users:reset': (state) => { state.error = {}; },
  },
  actions: {
    'get:users': ({ commit }) => {
      commit('error:users:reset');
      commit('loading:users', true);
      return fetch(userRoute).then((response) => {
        response.json().then((json) => {
          commit('set:users', json);
          commit('loading:users', false);
        })
          .catch(error => commit('error::users', error));
      })
        .catch(error => commit('error::users', error));
    },
  },
  getters: {},
});
