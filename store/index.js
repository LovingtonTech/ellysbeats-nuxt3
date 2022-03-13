import { defineStore } from 'pinia';
import EllysBeats from '../services/EllysbeatsService';

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: null,
    };
  },
  actions: {
    getProducts() {
      EllysBeats.getProducts().then((results) => {
        this.products = results.data;
      });
    },
  },
});
