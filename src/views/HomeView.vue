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
import productsData from '@/assets/products.json';
import brands from '@/assets/brands.json';
import CatalogFilter from '@/components/CatalogFilter.vue';
import CatalogGrid from '@/components/CatalogGrid.vue';
import { Product } from '@/types/types';
// import { mapState } from 'vuex';
// import { useStore } from 'vuex';
// import { key } from '@/store';

export default defineComponent({
  // setup() {
  //   const store = useStore(key);
  //   // store.state.cart;
  //   store.state.count;
  // },
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
  // computed: {
  //   ...mapState({
  //     cart: (state: State) => state.cart,
  //   }),
  // },
  created() {
    // console.log(productsData);
    // console.log(brands);
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
  aside {
    flex: 0 0 200px;
    text-align: left;
    padding: 10px;
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
