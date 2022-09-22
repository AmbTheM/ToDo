import { DbAPI } from "./DB.base";
import axios from "axios";
import { IUser } from "../../../../DTO/User.DTO";

export class UserAPI extends DbAPI<IUser> {
  constructor() {
    super();
    this.route = "user";
  }

  async findByProperty(Property: string, Query: string) {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get/${Property}/${Query}`)
      .catch((err) => {
        throw new Error(err);
      });
    return response.data[this.route];
  }
}
