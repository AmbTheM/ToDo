import { DbAdapter } from "./DB.adapter";
import { IUser } from "../DTO/User.DTO";

export class UserDbAdapter extends DbAdapter<IUser> {
  constructor() {
    super();
    this.route = "user";
  }
}
