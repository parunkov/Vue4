<template>
  <div class="navigation" :class="{ navigation_cart: $router.currentRoute.value.name === 'cart' }">
    <router-link to="/">
      <img :src="require('@/assets/images/logo.png')" />
    </router-link>
    <router-link v-if="$router.currentRoute.value.name === 'home'" to="/cart">
      <div class="cart-button">
        <div class="cart-image" v-html="cartIcon"></div>
        <div class="cart-counter"></div>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { cartIcon } from '@/assets/images';
// import logo from '@/assets/images/logo.png';

export default defineComponent({
  data() {
    return { cartIcon };
  },
  //   methods: {
  //     onNavigationClick() {
  //       console.log(this.$router.currentRoute.value.name);
  //     },
  //   },
});
</script>
<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-button {
  position: relative;
  padding: 10px;
}
.cart-counter {
  position: absolute;
  top: 3px;
  right: 1px;
  min-width: 20px;
  height: 20px;
  background: white;
  border: 1px solid red;
  border-radius: 10px;
}
</style>
