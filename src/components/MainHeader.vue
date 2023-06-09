<template>
  <div
    class="navigation"
    :class="{ navigation_page_cart: $router.currentRoute.value.name === 'cart' }"
  >
    <router-link to="/">
      <img :src="require('@/assets/images/logo.png')" />
    </router-link>
    <router-link v-if="$router.currentRoute.value.name === 'home'" to="/cart">
      <div class="cart-button">
        <div class="cart-image" v-html="cartIcon"></div>
        <div v-if="cartQuantity > 0" class="cart-counter">{{ cartQuantity }}</div>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { cartIcon } from '@/assets/images';

export default defineComponent({
  props: {
    cartQuantity: { type: Number, required: true },
  },
  data() {
    return { cartIcon };
  },
});
</script>
<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
  min-height: 66px;
  &_page_cart {
    justify-content: space-around;
  }
}
.cart-button {
  position: relative;
  padding: 10px;
  padding-bottom: 0;
}
.cart-counter {
  position: absolute;
  top: 3px;
  right: 1px;
  min-width: 20px;
  height: 20px;
  font-size: 12px;
  color: black;
  padding: 2px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
