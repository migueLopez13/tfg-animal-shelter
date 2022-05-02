import axios from "axios";
import router from "@/router";

/**
 *
 * parse error response
 */
function parseError(error) {
	if (error.data) {
		let data = error.data.errors || error.data.message;
		let status = error.status;

		return Promise.reject({ status, data });
	}

	return Promise.reject();
}

/**
 * parse response
 */
function parseBody(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.data;
	} else {
		return this.parseError(response.data.messages);
	}
}

/**
 * set headers
 */

function setHeaders() {
	const apiToken = localStorage.getItem("access_token");

	return {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		Authorization: "Bearer " + apiToken,
	};
}

/**
 * axios instance
 */
let instance = axios.create({
	baseURL: window.URL_BACKEND,
});

// request header
instance.interceptors.request.use(
	(config) => {
		config.headers = setHeaders();
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// response parse
instance.interceptors.response.use(
	(response) => {
		return parseBody(response);
	},
	(error) => {
		console.warn("Error status", error.response.status);
		if (error.response.status === 401) {
			localStorage.setItem("access_token", null);
			router.push({ name: "login" });
		}
		if (error.response) {
			return parseError(error.response);
		} else {
			return Promise.reject(error);
		}
	}
);

export const http = instance;
