<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '@/types/types';
import { ref } from 'vue';

const props = defineProps<{
  data: CartItem;
}>();

// console.log(22222);

// console.log(ref);

// const cardData: any = ref(props.data);
// console.log('🚀 ~ file: CartItem.vue:11 ~ cardData:', cardData);
// const total: number = props.value.data.price;
// console.log('🚀 ~ file: CartItem.vue:10 ~ total:', total);
</script>

<template>
  <div class="cart-item">
    <img :src="require(`@/assets${data.image}`)" class="cart-item__image" />
    <h3 class="cart-item__title">{{ `${data.brandName} / ${data.title}` }}</h3>
    <div class="cart-item__price">{{ '$' + data.price }}</div>
    <div class="cart-item__quantity">{{ data.quantity }}</div>
    <div class="cart-item__total">{{ '$' + data.price * data.quantity }}</div>
    <div class="cart-item__remove-button"></div>
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
    padding-left: 10px;
    padding-right: 10px;
  }
  &__quantity {
    padding-left: 10px;
    padding-right: 10px;
  }
  &__total {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
