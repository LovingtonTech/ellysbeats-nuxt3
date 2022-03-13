<template>
	<div class="flex justify-center bg-gray-300 min-h-screen w-full">
		<form
			class="min-w-fit bg-white flex flex-col my-auto p-5 rounded-lg shadow-lg"
			@submit.prevent=""
		>
			<h1 class="text-center text-2xl">Create Account</h1>
			<div class="flex flex-col sm:flex-row">
				<div class="input-field">
					<label for="">First Name</label>
					<input
						required
						type="text"
						v-model="newUser.firstname"
						placeholder="First Name"
					/>
				</div>
				<div class="input-field">
					<label for="">Last Name</label>
					<input
						required
						type="text"
						v-model="newUser.lastname"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div class="flex flex-col sm:flex-row">
				<div class="input-field">
					<label for="">Phone</label>
					<input
						required
						type="number"
						v-model="newUser.phone"
						placeholder="Phone Number"
					/>
				</div>
				<div class="input-field">
					<label for="">Email</label>
					<input
						required
						type="email"
						v-model="newUser.email"
						placeholder="Email"
					/>
				</div>
			</div>
			<div class="flex flex-col sm:flex-row">
				<div class="input-field">
					<label for="">New Password</label>
					<input
						required
						type="password"
						v-model="password1"
						placeholder="New Password"
					/>
				</div>
				<div class="input-field">
					<label for="">Retype Password</label>
					<input
						required
						type="password"
						v-model="password2"
						placeholder="Retype Password"
						@change="validatePassword(password1, password2)"
					/>
				</div>
			</div>
			<div class="input-field">
				<button @click="postUser">SIGN UP</button>
				<nuxt-link to="/login">Login</nuxt-link>
			</div>
		</form>
	</div>
</template>
<script>
import EllysbeatsService from '../services/EllysbeatsService';
export default {
	data() {
		return {
			newUser: {
				firstname: '',
				lastname: '',
				userPhone: '',
				userEmail: '',
				userPassword: '',
			},
			password1: '',
			password2: '',
		};
	},
	methods: {
		validatePassword(p1, p2) {
			if (p1.length < 6 || p2.length < 6) {
				alert('Password too short');
				return;
			} else {
				if (p1 !== p2) {
					alert('Passwords must match');
					return;
				} else {
					alert('Same');
					this.newUser.userPassword = p2;
				}
			}
		},
		postUser() {
			EllysbeatsService.postUser(this.newUser).then((result) => {
				alert(result);
			});
		},
	},
};
</script>
<style scoped>
.input-field {
	@apply block py-2;
}
.input-field a {
	@apply text-blue-600 hover:text-blue-800;
}
.input-field input {
	@apply block text-gray-700 border-b-2 border-gray-300 rounded border-gray-300 p-3 mb-3;
}
.input-field label {
	@apply block text-gray-700 font-bold py-2;
}
.input-field button {
	@apply block bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4;
}
</style>