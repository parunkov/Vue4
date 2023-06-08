<template>
  <div class="catalog-filter">
    <div class="catalog-filter__brand">All Brands</div>
    <div class="catalog-filter__brand" v-for="brand in brands" :key="brand.id">
      {{ brand.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import brands from '@/assets/brands.json';

export default defineComponent({
  data() {
    return {
      brands,
    };
  },
  components: {},
  created() {
    console.log(this.brands);
  },
});
</script>
<style lang="scss" scoped></style>
