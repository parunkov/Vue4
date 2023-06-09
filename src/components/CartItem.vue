<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '@/types/types';
// import { ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { up, down, trash } from '@/assets/images';

const store = useStore(key);
store.state.cart;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  data: CartItem;
}>();
console.log(store);
console.log(2222);
</script>

<template>
  <div class="cart-item">
    <img :src="require(`@/assets${data.image}`)" class="cart-item__image" />
    <h3 class="cart-item__title">{{ `${data.brandName} / ${data.title}` }}</h3>
    <div class="cart-item__price">{{ '$' + data.price }}</div>
    <div class="cart-item__quantity-wrapper">
      <div class="cart-item__quantity">{{ data.quantity }}</div>
      <div type="button" class="cart-item__plus" v-html="up"></div>
      <div type="button" class="cart-item__minus" v-html="down"></div>
    </div>
    <div class="cart-item__total">{{ '$' + data.price * data.quantity }}</div>
    <div class="cart-item__remove-button" v-html="trash"></div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  &__image {
    width: 130px;
  }
  &__title {
    padding-left: 20px;
    flex: auto;
    text-align: left;
  }
  &__price {
    width: 80px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &__quantity-wrapper {
    position: relative;
    padding: 10px;
    padding-right: 30px;
    margin-left: 15px;
    margin-right: 15px;
    border: 1px solid black;
    border-radius: 5px;
  }
  &__plus,
  &__minus {
    position: absolute;
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    padding: 0;
    right: 0;
    cursor: pointer;
  }
  &__plus {
    top: 0;
  }
  &__minus {
    bottom: 0;
  }
  &__total {
    width: 80px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &__remove-button {
    cursor: pointer;
    width: 60px;
  }
}
</style>
