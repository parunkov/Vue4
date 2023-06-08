<template>
  <div class="catalog">
    <aside>
      <catalog-filter />
    </aside>
    <main>
      <h1>Catalog</h1>
      <catalog-grid />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import products from '@/assets/products.json';
import brands from '@/assets/brands.json';
import CatalogFilter from '@/components/CatalogFilter.vue';
import CatalogGrid from '@/components/CatalogGrid.vue';

export default defineComponent({
  name: 'HomeView',
  components: { CatalogFilter, CatalogGrid },
  created() {
    console.log(products);
    console.log(brands);
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
