import { http } from "@/plugins/axios/http";

class BaseHttp {
	constructor() {}

	get(resourceUrl) {
		return http.get(resourceUrl);
	}

	post(resourceUrl, data) {
		return http.post(resourceUrl, data);
	}

	put(resourceUrl, data) {
		return http.put(resourceUrl, data);
	}

	destroy(resourceUrl) {
		return http.delete(resourceUrl);
	}
}

export default BaseHttp;
