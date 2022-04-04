<template>
	<div class="flex justify-center bg-gray-300 min-h-screen w-full space-y-8">
		<form
			class="
				container
				bg-white
				mx-auto
				my-auto
				flex flex-col
				py-5
				px-8 
				rounded-lg
				shadow-lg 
			"
			@submit.prevent=""
		>
			<div class="input-field">
				<input id="email" type="text" placeholder="Email" />
				<label for="email">Email</label>
			</div>
			<div class="input-field">
				<input id="password" type="password" placeholder="Password" />
				<label for="password">Password</label>
			</div>
			<div class="block items-center my-4">
				<input type="checkbox" id="remember" />
				<label for="remember">Remember me</label>
			</div>
			<div class="input-field">
				<label for="">Forgot Password?</label>
				<nuxt-link to=""> Reset </nuxt-link>
			</div>
			<div class="input-field">
				<button>Sign In</button>
				<nuxt-link to="/signup">Create Account</nuxt-link>
			</div>
		</form>
	</div>
</template>
<style scoped>
.input-field{
	@apply relative my-4 border-b-2 focus-within:border-blue-500;
}
/* .input-field input{
	@apply peer   focus-within:border-blue-500;
}
.input-field label{
	@apply absolute top-0;
} */

</style>
