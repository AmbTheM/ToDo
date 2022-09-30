import axios from "axios";
import { APIError } from "../../../../Exceptions/APIErrors";
import { IDBPort } from "../../../../Ports/DB.port";

export abstract class DbAPI<T> implements IDBPort<T> {
  APIURL: string = `http://localhost:9093`;
  protected route: string = "";
  protected config: any = {};

  async readAllFromDb(): Promise<any> {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get`)
      .catch((err) => {
        throw new Error(err);
      });

    return response.data[this.route];
  }

  async readFromDb(id: string): Promise<any> {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get/${id}`)
      .catch((err) => {
        throw new Error(err);
      });
    return response.data[this.route];
  }

  async saveToDb(obj: T) {
    const response: any = await axios
      .post(`${this.APIURL}/${this.route}/create`, obj, this.config)
      .catch((err) => {
        throw new APIError(err.response.data.message);
      });
    console.log(response.status);
  }

  async deleteFromDb(id: string) {
    const response: any = await axios
      .delete(`${this.APIURL}/${this.route}/delete/${id}`, this.config)
      .catch((err) => {
        throw new Error(err);
      });
    console.log(response.status);
  }

  async updateDb(id: string, obj: T) {
    const response: any = await axios
      .patch(`${this.APIURL}/${this.route}/update/${id}`, obj, this.config)
      .catch((err) => {
        throw new Error(err);
      });
    console.log(response.status);
  }

  async findDB(Property_1: string, Property_2: string) {
    return "Not Impletmented";
  }
}
