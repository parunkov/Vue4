<script setup lang="ts">
import CartItem from '@/components/CartItem.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

const store = useStore(key);
store.state.cart;
</script>

<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div class="headers">
      <h2 class="headers__item">Item</h2>
      <h2 class="headers__price">Price</h2>
      <h2 class="headers__quantity">Qty</h2>
      <h2 class="headers__total">Total</h2>
    </div>
    <cart-item v-for="item in store.state.cart" :key="item.title" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding-top: 20px;
}
.headers {
  display: flex;
}
</style>
