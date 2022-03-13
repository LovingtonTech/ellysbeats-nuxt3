<template>
	<div
		class="
			flex-col
			items-center
			text-center
			m-3
			w-80
			bg-white
			rounded-lg
			shadow-xl
			pb-3
		"
	>
		<div
			class="bg-center bg-cover w-full h-48"
			:style="{
				backgroundImage: `url(${require(`@/${product.productImage}`)})`,
			}"
		></div>
		<p class="whitespace-normal p-2">{{ product.productName }}</p>
		<p>KSH. {{ product.productPrice }}</p>
		<button
			class="bg-blue-500 m-auto w-3/4 px-4 py-2 rounded-lg shadow-xl text-white"
		>
			Add to Cart
		</button>
	</div>
</template>
<script>
export default {
	props: {
		product: {},
	},
};
</script>
<style scoped>
.productImage {
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 10rem;
}
</style>