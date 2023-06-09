<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '@/types/types';

const props = defineProps<{
  data: CartItem;
}>();
console.log(props);
</script>
<template>
  <div class="cart-item">
    <img :src="require(`@/assets${data.image}`)" class="cart-item__image" />
    <h3 class="cart-item__title">{{ data.title }}</h3>
    <div class="cart-item__price">{{ data.price }}</div>
    <div class="cart-item__quantity">{{ data.quantity }}</div>
    <div class="cart-item__total"></div>
    <div class="cart-item__remove-button"></div>
  </div>
</template>
