<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Multiselect></Multiselect>
    {{ users }}
  </div>
</template>

<script>
import Multiselect from './components/Multiselect/Multiselect.vue';

export default {
  name: 'app',
  components: {
    Multiselect,
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
  mounted() {
    this.$store.dispatch('get:users');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
