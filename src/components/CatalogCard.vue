<template>
  <div class="catalog-card">
    <img :src="require(`@/assets${image}`)" class="catalog-card__image" />
    <div class="catalog-card__content">
      <h3 class="catalog-card__title">{{ title }}</h3>
      <div class="catalog-card__brand">{{ brandName }}</div>
      <div class="catalog-card__price">{{ '$' + price?.value }}</div>
      <div class="catalog-card__colors" v-if="colors.length > 0">
        <div v-for="color in colors" :key="color.index">{{ color.avilablity }}</div>
      </div>
      <button type="button" @click="addToCart">Add to Basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CartItem, Price, Options, Variant, Property } from '@/types/types';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    brandName: String,
    price: { type: Object as PropType<Price>, required: true },
    type: { type: String, required: true },
    options: { type: Object as PropType<Options[]> | undefined },
    variants: { type: Object as PropType<Variant[]> | undefined },
  },
  data() {
    return {
      colors: [] as Property[],
      sizes: [] as Property[],
    };
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
  created() {
    // console.log(this.$props.variants);
    if (this.$props.options) {
      this.$props.options.forEach((item) => {
        if (item.attribute_code === 'color') {
          item.values.forEach((value) => {
            this.colors.push({ label: value.label, index: value.value_index, value: value.value });
          });
        }
        console.log(this.colors);
      });
    }
  },
});
</script>
<style lang="scss" scoped>
.catalog-card {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px;
  @media (max-width: 450px) {
    text-align: center;
    width: 100%;
  }
  &__content {
    flex: auto;
    display: flex;
    flex-direction: column;
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
    display: block;
    width: 200px;
    margin: 0 auto;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__brand {
    margin-bottom: 5px;
  }
  &__price {
    flex: auto;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__colors {
    display: flex;
  }
}
</style>
