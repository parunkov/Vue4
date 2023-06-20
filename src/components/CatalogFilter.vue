<template>
  <div class="catalog-filter">
    <h2 class="catalog-filter__title" @click="onTitleClick">
      Filter
      <span class="catalog-filter__arrow-down" v-html="down" v-if="!isFilterVisible"></span>
      <span class="catalog-filter__arrow-down" v-html="up" v-if="isFilterVisible"></span>
    </h2>
    <div v-if="isFilterVisible">
      <div
        class="catalog-filter__brand"
        @click="onAllFilersClick"
        :class="{ selected: allSelected }"
      >
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import brands from '@/assets/brands.json';
import { Brand } from '@/types/types';
import { up, down } from '@/assets/images';

export default defineComponent({
  data() {
    return {
      brands: brands as Brand[],
      allSelected: false,
      down,
      up,
      isFilterVisible: true,
    };
  },
  created() {
    const extendedBrands: Brand[] = brands;
    extendedBrands.forEach((item) => (item.selected = false));
    this.brands = extendedBrands;
  },
  mounted() {
    if (window.innerWidth <= 450) this.isFilterVisible = false;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 450) this.isFilterVisible = true;
    });
  },
  methods: {
    onFilerClick(brand: Brand): void {
      this.allSelected = false;
      this.brands.forEach((item) => {
        item.selected = false;
      });
      brand.selected = true;
      this.$emit('changeFilter', brand.id);
    },
    onAllFilersClick(): void {
      this.brands.forEach((item) => {
        item.selected = false;
      });
      this.allSelected = true;
      this.$emit('changeFilter', null);
    },
    onTitleClick() {
      this.isFilterVisible = !this.isFilterVisible;
    },
  },
});
</script>
<style lang="scss" scoped>
.catalog-filter {
  border-right: 2px solid black;
  padding-right: 20px;
  @media (max-width: 450px) {
    border-right: none;
    padding-right: 0;
  }
  &__title {
    display: none;
    padding: 5px;
    cursor: pointer;
    @media (max-width: 450px) {
      display: block;
    }
  }
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
