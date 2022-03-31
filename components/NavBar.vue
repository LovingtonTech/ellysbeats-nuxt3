<template>
	<div class="navbar flex justify-between p-3 items-center bg-blue-300">
			<div @click="toggleDropdown" class="navtoggle sm:hidden">
				<i class="pi pi-bars h-6 w-6" v-if="!dropdown"> </i>
				<fa icon="times" v-if="dropdown" class="h-6 w-6" />
			</div>
		<div class="text-xl">TopGladz</div>
		<nav class="navlinks hidden sm:block" :class="{ dropdownNav: dropdown }">
			<nuxt-link to="./">Home</nuxt-link>
			<nuxt-link to="./products">Buy Products</nuxt-link>
			<nuxt-link to="./contacts">Contact us</nuxt-link>
			<nuxt-link to="./login">Login</nuxt-link>
		</nav>
		<div class="flex space-x-3 text-lg">
			<div class="shadow rounded-lg px-4 py-2 bg-red-400 text-white text-bold">
				<fa icon="cart-plus" />
				0 items
			</div>
		</div>
	</div>
</template>

<script>
// import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/vue/solid";
export default {
	// components: { MenuIcon, XIcon, ShoppingCartIcon },
	mounted() {
		window.addEventListener("resize", this.resetDropdown);
		window.addEventListener("scroll", this.resetDropdown);
		this.resetDropdown;
		const links = document.querySelectorAll("a");
		links.forEach((link) => link.addEventListener("click", this.resetDropdown));
	},
	data() {
		return {
			dropdown: false,
		};
	},
	methods: {
		resetDropdown() {
			this.dropdown = false;
		},
		toggleDropdown() {
			this.dropdown = !this.dropdown;
			console.log(this.dropdown);
		},
	},
};
</script>

<style scoped>
.navlinks a {
	@apply p-3 hover:bg-blue-400 hover:text-white;
}
a.nuxt-link-exact-active {
	@apply bg-blue-400 text-white;
}

.dropdownNav {
	@apply flex flex-col h-full left-0 top-0 fixed bg-blue-300 text-center !important;
}
.dropdownNav a {
	@apply w-full;
}
</style>