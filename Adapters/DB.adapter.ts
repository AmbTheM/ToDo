import { IDBPort } from "../Ports/DB.port";
import { config } from "../Config/config";
import axios from "axios";

export abstract class DbAdapter<T> implements IDBPort<T> {
  APIURL: string = `${config.server.url}:${config.server.port}`;
  protected route: string = "";

  async readAllFromDb(): Promise<any> {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get`)
      .catch((err) => {
        console.error(err);
      });

    return response.data[this.route];
  }

  async readFromDb(id: string): Promise<any> {
    const response: any = await axios
      .get(`${this.APIURL}/${this.route}/get/${id}`)
      .catch((err) => {
        console.error(err);
      });
    return response.data[this.route];
  }

  async saveToDb(obj: T) {
    const response: any = await axios
      .post(`${this.APIURL}/${this.route}/create`, obj)
      .catch((err) => {
        console.error(err);
      });
    console.log(response.status);
  }

  async deleteFromDb(id: string) {
    const response: any = await axios
      .delete(`${this.APIURL}/${this.route}/delete/${id}`)
      .catch((err) => {
        console.error(err);
      });
    console.log(response.status);
  }

  async updateDb(id: string, obj: T) {
    const response: any = await axios
      .patch(`${this.APIURL}/${this.route}/update/${id}`, obj)
      .catch((err) => {
        console.error(err);
      });
    console.log(response.status);
  }
}
