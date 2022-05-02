import { createWebHistory, createRouter } from "vue-router";
import Maintenance from "@/views/maintenance.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Maintenance,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
