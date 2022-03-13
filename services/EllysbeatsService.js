import axios from "axios";
//import product from '../api/models/product'

const apiClient = axios.create({
	baseURL: "http://localhost:3030/api",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default {
	getProducts() {
		return apiClient.get("/products");
	},
	postProduct(product) {
		const formData = new FormData();
		formData.append("productName", product.productName);
		formData.append("productCategory", product.productCategory);
		formData.append("productPrice", product.productPrice);
		formData.append(
			"productImage",
			product.productImage,
			product.productImage.name
		);
		return apiClient.post("/products", formData);
	},
	deleteProduct(id) {
		return apiClient.delete(`/products/${id}`);
	},
	postUser(newUser) {
		return apiClient.post("users/signup", newUser);
	},
};
