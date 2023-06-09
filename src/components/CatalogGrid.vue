<template>
  <div class="catalog-grid">
    <CatalogCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.regular_price"
      :brandName="product.brandName"
    />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CatalogCard from './CatalogCard.vue';
import { Product } from '@/types/types';

export default defineComponent({
  props: {
    products: Object as PropType<Product[]>,
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
