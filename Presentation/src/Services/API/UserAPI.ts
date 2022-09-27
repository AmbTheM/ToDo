import { DbAPI } from "./DB.base";
import axios from "axios";
import { IUser } from "../../../../DTO/User.DTO";
import { APIError } from "../../../../Exceptions/APIErrors";

export class UserAPI extends DbAPI<IUser> {
  constructor() {
    super();
    this.route = "user";
  }

  async findByProperty(Property: string, Query: string) {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get/${Property}/${Query}`)
      .catch((err) => {
        throw new APIError(err.response.data.message);
      });
    return response.data[this.route];
  }
}
