<template>
  <div class="catalog-card">
    <img :src="require(`@/assets${image}`)" class="catalog-card__image" />
    <div class="catalog-card__content">
      <h3 class="catalog-card__title">{{ title }}</h3>
      <div class="catalog-card__brand">{{ brandName }}</div>
      <div class="catalog-card__price">{{ '$' + price?.value }}</div>
      <button type="button" @click="addToCart">Add to Basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CartItem, Price } from '@/types/types';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    brandName: String,
    price: { type: Object as PropType<Price>, required: true },
  },
  methods: {
    addToCart(): void {
      const cartItem: CartItem = {
        title: this.$props.title,
        image: this.$props.image,
        price: this.$props.price?.value,
        brandName: this.$props.brandName,
        quantity: 1,
      };
      this.$store.dispatch('addToCart', cartItem);
    },
  },
});
</script>
<style lang="scss" scoped>
.catalog-card {
  text-align: left;
  margin: 5px;
  &__content {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    button {
      width: 100%;
      padding: 5px 10px;
      border-radius: 5px;
      background: black;
      color: white;
      font-size: 14px;
      outline: none;
      border: 1px solid black;
      cursor: pointer;
      &:hover {
        color: black;
        background: white;
        border: 1px solid black;
      }
    }
  }
  &__image {
    width: 200px;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__brand {
    margin-bottom: 5px;
  }
  &__price {
    font-weight: 700;
    margin-bottom: 10px;
  }
}
</style>
