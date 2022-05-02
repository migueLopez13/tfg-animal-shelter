import BaseService from "./base-service";

class UserService extends BaseService {
	constructor() {
		super("user");
	}
}

export default new UserService();
