<template>
  <div class="catalog-grid">
    <CatalogCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.regular_price"
      :brand="product.brand"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CatalogCard from './CatalogCard.vue';
import products from '@/assets/products.json';

export default defineComponent({
  data() {
    return {
      products,
    };
  },
  components: { CatalogCard },
});
</script>
<style lang="scss" scoped>
.catalog-grid {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
