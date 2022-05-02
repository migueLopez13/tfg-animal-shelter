import BaseHttp from "@/plugins/axios/base-http";

class BaseService extends BaseHttp {
	resource = null;

	constructor(resource) {
		super();
		this.resource = resource;
	}

	fetch(query) {
		const resource = query ? `${this.resource}?${query}` : this.resource;

		return super.get(resource);
	}

	get(id) {
		return super.get(`${this.resource}/${id}`);
	}

	post(data) {
		return super.post(`${this.resource}`, data);
	}

	update(id, data) {
		return super.put(`${this.resource}/${id}`, data);
	}

	destroy(id) {
		return super.destroy(`${this.resource}/${id}`);
	}
}

export default BaseService;
