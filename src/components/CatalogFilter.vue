<template>
  <div class="catalog-filter">
    <div class="catalog-filter__brand" @click="onAllFilersClick" :class="{ selected: allSelected }">
      All Brands
    </div>
    <div
      class="catalog-filter__brand"
      v-for="brand in brands"
      :key="brand.id"
      :class="{ selected: brand.selected }"
      @click="onFilerClick(brand)"
    >
      {{ brand.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import brands from '@/assets/brands.json';

interface Brand {
  id: number | string;
  title: string;
  sort: string;
  code: string;
  selected?: boolean;
}

export default defineComponent({
  data() {
    return {
      brands: brands as Brand[],
      allSelected: false,
    };
  },
  components: {},
  created() {
    const extendedBrands: Brand[] = brands;
    extendedBrands.forEach((item) => (item.selected = false));
    this.brands = extendedBrands;
  },
  methods: {
    onFilerClick(brand: Brand) {
      this.allSelected = false;
      this.brands.forEach((item) => {
        item.selected = false;
      });
      brand.selected = true;
    },
    onAllFilersClick() {
      this.brands.forEach((item) => {
        item.selected = false;
      });
      this.allSelected = true;
    },
  },
});
</script>
<style lang="scss" scoped>
.catalog-filter {
  border-right: 2px solid black;
  padding-right: 20px;
  &__brand {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;
    &.selected {
      background: black;
      color: white;
      border: 1px solid black;
    }
    &:hover {
      border: 1px solid black;
    }
  }
}
</style>
