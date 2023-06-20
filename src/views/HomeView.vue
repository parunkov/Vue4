<template>
  <div class="catalog">
    <aside>
      <catalog-filter @changeFilter="onChangeFilter" />
    </aside>
    <main>
      <h1>Catalog</h1>
      <catalog-grid :products="products" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import productsData from '@/assets/level3/products.json';
import brands from '@/assets/brands.json';
import CatalogFilter from '@/components/CatalogFilter.vue';
import CatalogGrid from '@/components/CatalogGrid.vue';
import { Product } from '@/types/types';
console.log(productsData);

export default defineComponent({
  data() {
    return {
      products: productsData as Product[],
    };
  },
  name: 'HomeView',
  components: { CatalogFilter, CatalogGrid },
  methods: {
    onChangeFilter(brand: number | null) {
      if (brand) {
        const filteredProducts: Product[] = productsData.filter((item) => item.brand === brand);
        this.products = filteredProducts;
      } else {
        this.products = productsData;
      }
    },
  },
  created() {
    const extendedProducts: Product[] = productsData;
    extendedProducts.forEach((item: Product) => {
      const brandId: number = item.brand;
      const brandName: string | undefined = brands.find((item) => item.id === brandId)?.title;
      item.brandName = brandName;
    });
    this.products = extendedProducts;
  },
});
</script>
<style lang="scss" scoped>
.catalog {
  display: flex;
  padding-top: 15px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  aside {
    flex: 0 0 200px;
    text-align: left;
    padding: 10px;
    @media (max-width: 450px) {
      flex: auto;
    }
  }
  main {
    text-align: left;
    h1 {
      padding-left: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>
