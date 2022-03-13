<template>
	<div class="h-full m-3 p5 bg-gray-100">
		<h1 class="text-center text-xl mb-2">Products Available</h1>
		<div class="overflow-auto rounded-lg shadow border-2 border-gray-200">
			<table class="w-full">
				<thead>
					<tr>
						<th class="p-2">Product Id</th>
						<th class="p-2">Product Name</th>
						<th class="p-2">Product Category</th>
						<th class="p-2">Product Price</th>
						<th class="p-2">Product Image</th>
						<th class="p-2" colspan="2">Actions</th>
					</tr>
					<tr>
						<th><input type="text" value="Add New Product :" disabled /></th>
						<th>
							<input
								v-model="product.productName"
								type="text"
								placeholder="Product name"
								required
							/>
						</th>
						<th>
							<input
								v-model="product.productCategory"
								type="text"
								placeholder="Product Category"
								required
							/>
						</th>
						<th>
							<input
								v-model="product.productPrice"
								type="text"
								placeholder="Product Price"
								required
							/>
						</th>
						<th>
							<input @change="imageSelected" type="file" required />
						</th>
						<th>
							<fa @click="clearProduct" icon="backspace" />
						</th>
						<th>
							<fa @click="addProduct" icon="plus" class="text-green-700" />
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="product in products" :key="product._id">
						<td>{{ product._id }}</td>
						<td>{{ product.productName }}</td>
						<td>{{ product.productCategory }}</td>
						<td>{{ product.productPrice }}</td>
						<td>{{ product.productImage }}</td>
						<td><fa @click="editProduct(product._id)" icon="edit" /></td>
						<td>
							<fa
								@click="deleteProduct(product._id)"
								class="text-red-600"
								icon="trash-alt"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import EllysbeatsService from '../../services/EllysbeatsService';
export default {
	data() {
		return {
			product: {
				productName: '',
				productCategory: '',
				productPrice: '',
				productImage: {},
			},
			products: [],
		};
	},
	updated() {},
	mounted() {
		this.getProducts();
	},
	methods: {
		getProducts() {
			EllysbeatsService.getProducts().then((result) => {
				this.products = result.data;
			});
		},
		imageSelected(event) {
			this.product.productImage = event.target.files[0];
		},
		clearProduct() {
			this.product.productName = '';
			this.product.productCategory = '';
			this.product.productPrice = '';
		},
		async addProduct() {
			if (
				this.product.productName != '' &&
				this.product.productCategory != '' &&
				this.product.productPrice != '' &&
				this.product.productImage != ''
			) {
				await EllysbeatsService.postProduct(this.product).then((result) => {
					if (result.statusText === 'Created') {
						this.getProducts();
						this.clearProduct();
					}
					return;
				});
			}
			return;
		},
		editProduct(_id) {},
		deleteProduct(_id) {
			EllysbeatsService.deleteProduct(_id).then((result) => {
				if (result.statusText === 'OK') {
					this.getProducts();
				}
				return;
			});
		},
	},
};
</script>

<style scoped>
thead {
	@apply bg-gray-100 border-b-4 border-gray-200;
}
thead tr th {
	@apply text-sm font-semibold tracking-wide text-left;
}
thead tr th input {
	@apply p-2;
}
tbody {
	@apply divide-y divide-gray-200;
}
tbody tr:nth-child(even) {
	@apply bg-gray-200;
}
tr td {
	@apply p-2 text-sm text-gray-700 whitespace-nowrap;
}
</style>