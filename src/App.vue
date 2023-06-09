<template>
  <div class="container">
    <main-header :cart-quantity="$store.state.cartQuantity" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from './components/MainHeader.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore(key);
    store.state.cart;
  },
  // data() {
  //   return {
  //     cartQuantity: 0 as number,
  //   };
  // },
  components: { MainHeader },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  max-width: 1040px;
  margin: 0 auto;
}
</style>
