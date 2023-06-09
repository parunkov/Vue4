<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '@/types/types';
import { useStore } from 'vuex';
import { key } from '@/store';
import { up, down, trash } from '@/assets/images';

const store = useStore(key);
store.state.cart;

const props = defineProps<{
  data: CartItem;
}>();

const onPlusClick: () => void = () => {
  store.dispatch('addToCart', props.data);
};
const onMinusClick: () => void = () => {
  store.dispatch('removeFromCart', props.data);
};
const onTrashClick: () => void = () => {
  store.dispatch('removeProduct', props.data);
};
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__product-block">
      <img :src="require(`@/assets${data.image}`)" class="cart-item__image" />
      <div class="cart-item__title-wrapper">
        <h3 class="cart-item__title">{{ `${data.brandName} / ${data.title}` }}</h3>
        <div v-if="data.color">Color: {{ data.color }}</div>
        <div v-if="data.size">Size: {{ data.size }}</div>
      </div>
    </div>
    <div class="cart-item__headers-block">
      <h4 class="cart-item__headers-price">Price</h4>
      <h4 class="cart-item__headers-quantity">Qty</h4>
      <h4 class="cart-item__headers-total">Total</h4>
      <div class="cart-item__headers-trash"></div>
    </div>
    <div class="cart-item__price-block">
      <div class="cart-item__price">{{ '$' + data.price }}</div>
      <div class="cart-item__quantity-wrapper">
        <div class="cart-item__quantity">{{ data.quantity }}</div>
        <div type="button" class="cart-item__plus" v-html="up" @click="onPlusClick"></div>
        <div type="button" class="cart-item__minus" v-html="down" @click="onMinusClick"></div>
      </div>
      <div class="cart-item__total">
        {{ '$' + Math.round(data.price * data.quantity * 100) / 100 }}
      </div>
      <div class="cart-item__remove-button" v-html="trash" @click="onTrashClick"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  &__product-block {
    display: flex;
    align-items: center;
    flex: auto;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  &__image {
    width: 130px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
  &__title-wrapper {
    padding-left: 20px;
    flex: auto;
    text-align: left;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__headers-block {
    display: none;
    margin-bottom: 5px;
    width: 100%;
    @media (max-width: 600px) {
      display: flex;
    }
  }
  &__headers-price,
  &__headers-total {
    width: 40%;
    text-align: center;
  }
  &__headers-quantity {
    width: 80px;
  }
  &__headers-trash {
    width: 60px;
  }
  &__price-block {
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      margin-bottom: 10px;
      width: 100%;
    }
  }
  &__price {
    width: 80px;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 600px) {
      width: 40%;
    }
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
    @media (max-width: 600px) {
      width: 40%;
    }
  }
  &__remove-button {
    cursor: pointer;
    width: 60px;
  }
}
</style>
