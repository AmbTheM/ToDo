import axios from "axios";
import { ITask } from "../../../../DTO/Task.DTO";
import { DbAPI } from "./DB.base";

export class TaskAPI extends DbAPI<ITask> {
  private UserID = "";
  constructor(UserID: string) {
    super();
    this.route = "task";
    this.UserID = UserID;
    this.config = {
      headers: {
        authorization: `Bearer ${this.UserID}`,
      },
    };
  }

  async readAllFromDb(): Promise<any> {
    return await this.readAllUsersFromDb(this.UserID);
  }

  async readAllUsersFromDb(userID: string): Promise<any> {
    const response: any = await axios
      .post(`${this.APIURL}/${this.route}/get`, { userID }, this.config)
      .catch((err) => {
        throw new Error(err);
      });

    return response.data[this.route];
  }
}
