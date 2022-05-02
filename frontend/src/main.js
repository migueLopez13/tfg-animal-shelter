import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import messages from "@/plugins/i18n/messages";
import axios from "axios";
import VueAxios from "vue-axios";

const i18n = createI18n({
	locale: "es",
	fallbackLocale: "es",
	messages,
});

const app = createApp(App);

app.use(router).use(createPinia()).use(i18n).use(VueAxios, axios).mount("#app");
