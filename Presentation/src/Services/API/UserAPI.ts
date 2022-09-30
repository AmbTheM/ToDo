import { DbAPI } from "./DB.base";
import axios from "axios";
import { IUser } from "../../../../DTO/User.DTO";
import { APIError } from "../../../../Exceptions/APIErrors";

export class UserAPI extends DbAPI<IUser> {
  constructor() {
    super();
    this.route = "user";
  }

  async findDB(Username: string, Password: string) {
    const userQuery = { Username, Password };
    const response: any = await axios
      .post(`${this.APIURL}/${this.route}/login`, userQuery)
      .catch((err) => {
        throw new APIError(err.response.data.message);
      });
    return response.data;
  }
}
