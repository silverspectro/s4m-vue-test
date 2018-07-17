<template>
    <div id="app">
        <h4 class="text-center">Peut rechercher sur le nom et le pseudo</h4>
        <pre>{{ users}}</pre>
        <div class="user-selector">
            <Multiselect :source="users" :options="{debounceDuration: 1000}" :model="selected"></Multiselect>
        </div>
        <div>
            <h4>Selected values:</h4>
            <div v-for="{id,name} in selected">
                <pre>{ id: {{id}}, name: {{name}} }</pre>
            </div>
        </div>
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
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style src="./styles/app.scss" lang="scss"></style>
