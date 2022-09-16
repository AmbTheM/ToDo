import axios from "axios";
import { ITask } from "../DTO/Task.DTO";
import { DbAdapter } from "./DB.adapter";

export class TaskDbAdapter extends DbAdapter<ITask> {
  constructor() {
    super();
    this.route = "task";
  }

  async readAllFromDb(userID?: string): Promise<any> {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get/${userID}`)
      .catch((err) => {
        console.error(err);
      });

    return response.data[this.route];
  }
}
