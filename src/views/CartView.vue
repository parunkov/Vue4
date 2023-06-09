<script setup lang="ts">
import CartItem from '@/components/CartItem.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { ref, Ref } from 'vue';

const store = useStore(key);
store.state.cart;

const currentSumm: number = store.state.cart.reduce(
  (summ, item) => Math.round((summ + item.price * item.quantity) * 100) / 100,
  0,
);
const totalSumm: Ref<number> = ref(currentSumm);
const onItemClick: () => void = () => {
  const summ = store.state.cart.reduce(
    (summ, item) => Math.round((summ + item.price * item.quantity) * 100) / 100,
    0,
  );
  totalSumm.value = summ;
};
</script>

<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div class="headers">
      <h2 class="headers__item">Item</h2>
      <h2 class="headers__price">Price</h2>
      <h2 class="headers__quantity">Qty</h2>
      <h2 class="headers__total">Total</h2>
      <div class="headers__trash"></div>
    </div>
    <cart-item
      v-for="item in store.state.cart"
      :key="item.title"
      :data="item"
      @click="onItemClick"
    />
    <h2 class="summ">{{ 'Subtotal: $' + totalSumm }}</h2>
    <button type="button" class="submit-button">Checkout</button>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding-top: 20px;
}
h1 {
  margin-bottom: 20px;
}
.cart-item {
  border-bottom: 2px solid black;
}
.headers {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  &__item {
    flex: auto;
  }
  &__price {
    width: 80px;
  }
  &__quantity {
    width: 80px;
  }
  &__total {
    width: 80px;
  }
  &__trash {
    width: 60px;
  }
}
.summ {
  text-align: right;
  margin-top: 10px;
  margin-bottom: 30px;
}
.submit-button {
  display: block;
  margin-left: auto;
  margin-right: 0;
  padding: 10px 60px;
  border-radius: 5px;
  background: black;
  color: white;
  font-size: 22px;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
  }
}
</style>
