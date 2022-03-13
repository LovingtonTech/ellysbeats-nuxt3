<template>
	<div class="flex-col bg-gray-300 py-3 items-center">
		<div class="text-center">
			<h1 class="text-3xl">Great products for you</h1>
			<p>Cool products for the cool G's</p>
		</div>
		<div class="flex flex-wrap justify-center">
			<Product
				:product="product"
				v-for="product in productStore.products"
				:key="product._id"
			/>
		</div>
		<button @click="getProducts">Get products</button>
	</div>
</template>

<script setup>
import { useProductStore } from "@/store";
import { storeToRefs, mapActions } from "pinia";
import { onMounted } from "vue";

const productStore = useProductStore();
const { getProducts } = mapActions(useProductStore, ["getProducts"]);

onMounted(() => {
	console.log("Mounted");
	// getProducts;
});
</script>