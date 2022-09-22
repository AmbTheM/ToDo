export interface IDBPort<T> {
  APIURL: string;

  readAllFromDb(userID: string): Promise<any>;
  readAllFromDb(): Promise<any>;

  readFromDb(id: string): Promise<any>;

  saveToDb(obj: T): void;

  deleteFromDb(id: string): void;

  updateDb(id: string, obj: T): void;

  findByProperty(Property: string, Query: string): Promise<any>;
}
