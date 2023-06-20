<template>
  <div class="catalog-card">
    <img :src="require(`@/assets${image}`)" class="catalog-card__image" />
    <div class="catalog-card__content">
      <h3 class="catalog-card__title">{{ title }}</h3>
      <div class="catalog-card__brand">{{ brandName }}</div>
      <div class="catalog-card__price">{{ '$' + price?.value }}</div>
      <div class="catalog-card__colors" v-if="colors.length > 0">
        <div
          v-for="color in colors"
          :key="color.index"
          class="catalog-card__color"
          :style="`background: ${color.value}`"
          :class="{
            'catalog-card__color_selected': color.selected,
            'catalog-card__color_disabled': !color.avilablity,
          }"
          @click="() => onColorClick(color)"
        ></div>
      </div>
      <div class="catalog-card__sizes" v-if="sizes.length > 0">
        <div
          v-for="size in sizes"
          :key="size.index"
          class="catalog-card__size"
          :class="{
            'catalog-card__size_selected': size.selected,
            'catalog-card__size_disabled': !size.avilablity,
          }"
          @click="() => onSizeClick(size)"
        >
          {{ size.label }}
        </div>
      </div>
      <button type="button" @click="addToCart">Add to Basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CartItem, Price, Options, Variant, Property, Attributes } from '@/types/types';

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
    onColorClick(color: Property): void {
      this.colors.forEach((item) => {
        item.selected = false;
      });
      color.selected = true;
      this.checkAvilablity();
    },
    onSizeClick(size: Property): void {
      this.sizes.forEach((item) => {
        item.selected = false;
      });
      size.selected = true;
      this.checkAvilablity();
    },
    checkAvilablity(): void {
      // console.log(this.colors);
      const currentColor = this.colors.find((item) => item.selected);
      const currentSize = this.sizes.find((item) => item.selected);
      // console.log('🚀 ~ file: CatalogCard.vue:83 ~ checkAvilablity ~ currentSize:', currentSize);
      // console.log('🚀 ~ file: CatalogCard.vue:80 ~ checkAvilablity ~ currentColor:', currentColor);
      const filterProperty = (code: string, index: number | undefined, mapCode: string) =>
        this.$props.variants
          ?.filter((item) =>
            item.attributes.find(
              (attribute: Attributes) => attribute.code === code && attribute.value_index === index,
            ),
          )
          ?.map(
            (item) => item.attributes.find((attribute) => attribute.code === mapCode)?.value_index,
          );
      const filteredSizes = filterProperty('color', currentColor?.index, 'size');
      const filteredColors = filterProperty('size', currentSize?.index, 'color');
      this.colors.forEach((item) => {
        item.avilablity = false;
        if (filteredColors?.includes(item.index)) {
          item.avilablity = true;
        }
      });
      this.sizes.forEach((item) => {
        item.avilablity = false;
        if (filteredSizes?.includes(item.index)) {
          item.avilablity = true;
        }
      });
    },
  },
  created() {
    // console.log(this.$props.variants);
    const createData = (item: Options, code: string, dataItem: Property[]) => {
      if (item.attribute_code === code) {
        item.values.forEach((value, index) => {
          dataItem.push({
            label: value.label,
            index: value.value_index,
            value: value.value,
            avilablity: true,
            selected: index === 0,
          });
        });
      }
    };
    if (this.$props.options) {
      this.$props.options.forEach((item) => {
        createData(item, 'color', this.colors);
        createData(item, 'size', this.sizes);
      });
      this.checkAvilablity();
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
      margin-top: 10px;
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
  &__color,
  &__size {
    position: relative;
    width: 40px;
    height: 22px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    text-align: center;
    padding-top: 1px;
    cursor: pointer;
    &_selected {
      border: 2px solid orange;
    }
    &_disabled {
      opacity: 0.2;
    }
  }
  &__sizes {
    display: flex;
  }
}
</style>
