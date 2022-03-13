<template>
	<div class="flex justify-center bg-gray-300 min-h-screen w-full space-y-8">
		<form
			class="
				w-full
				max-w-xs
				bg-white
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
				<label for="email">Email</label>
				<input id="email" type="text" placeholder="Email" />
			</div>
			<div class="input-field">
				<label for="password">Password</label>
				<input id="password" type="password" placeholder="Password" />
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
.input-field {
	@apply block py-2;
}
.input-field a {
	@apply text-blue-600 hover:text-blue-800;
}
.input-field input {
	@apply text-gray-700 shadow border rounded border-gray-300 p-3 mb-3;
}
.input-field label {
	@apply text-gray-700 font-bold py-2;
}
.input-field button {
	@apply bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4;
}
</style>
