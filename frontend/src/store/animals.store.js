import { defineStore } from "pinia";

export const useStore = defineStore("animals", {
	state: () => {
		return {
			animals: ["example"],
		};
	},
});
