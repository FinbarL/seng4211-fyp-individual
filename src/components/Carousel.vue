<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

const carouselData = ref<Product[]>();
const hasDataLoaded = ref(false);
const fetchProductData = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const products: ProductData = await response.json();
  carouselData.value = products.products;
  hasDataLoaded.value = true;
};
const getSlideId = computed(() => (id: number) => `slide-${id}`);
onMounted(async () => {
  await fetchProductData();
  console.log('loaded!');
});
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
</script>


<template>
  <div>
  <div v-if="hasDataLoaded" class="carousel w-[600px]">
      <div v-for="item in carouselData" :key="item.id" :id="getSlideId(item.id)" class="carousel-item relative w-fit h-fit">
        <img :alt="item.title" :src="item.thumbnail" class="w-[200px] h-[200px] relative z-[-3]" />
      </div>
  </div>
  <div class="flex justify-center w-[600px] py-2 gap-2">
    <div v-for="item in carouselData" :key="item.id" class="flex justify-center py-2 gap-2">
      <a :href="`#${getSlideId(item.id)}`" class="btn btn-xs">{{item.id}}</a>
    </div>
  </div>
  </div>
</template>
