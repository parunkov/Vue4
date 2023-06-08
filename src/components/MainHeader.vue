<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">
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

export default defineComponent({
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
