<template>
  <div class="catalog-card">
    <img :src="require(`@/assets${image}`)" class="catalog-card__image" />
    <div class="catalog-card__content">
      <div class="catalog-card__title">{{ title }}</div>
      <div class="catalog-card__brand">{{ `Brand ${brand}` }}</div>
      <div class="catalog-card__price">{{ price?.value }}</div>
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
    }
  }
  &__image {
    width: 200px;
  }
}
</style>
