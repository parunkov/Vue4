<template>
  <div class="catalog-card">
    <img :src="require(`@/assets${image}`)" class="catalog-card__image" />
    <div class="catalog-card__content">
      <h3 class="catalog-card__title">{{ title }}</h3>
      <div class="catalog-card__brand">{{ `Brand ${brand}` }}</div>
      <div class="catalog-card__price">{{ '$' + price?.value }}</div>
      <button type="button">Add to Basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Price {
  currency: string;
  value: number;
}

export default defineComponent({
  props: {
    title: String,
    image: String,
    brand: Number,
    price: Object as PropType<Price>,
  },
  components: {},
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
