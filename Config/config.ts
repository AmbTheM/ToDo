import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

const MONGO_DB_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_DB_PASSWORD: string = process.env.MONGO_PASSWORD || "";
const MONGO_DB_URL: string = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@todo.kwmhcg2.mongodb.net/retryWrites=true&w=majority`;
const API_URL: string = process.env.API_URL || "";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8080;

export const config = {
  mongo: {
    url: MONGO_DB_URL,
  },
  server: {
    port: SERVER_PORT,
    url: API_URL,
  },
};
