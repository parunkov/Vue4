<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import products from '@/assets/products.json';
import brands from '@/assets/brands.json';

export default defineComponent({
  name: 'HomeView',
  components: {},
  created() {
    // console.log(products);
    console.log(brands);
  },
});
</script>
