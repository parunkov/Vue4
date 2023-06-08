<template>
  <main class="catalog">
    <aside>
      <catalog-filter />
    </aside>
    <div class="calalog__grid">
      <catalog-grid />
    </div>
  </main>
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
  aside {
    flex: 0 0 200px;
    text-align: left;
    padding: 10px;
  }
}
</style>
