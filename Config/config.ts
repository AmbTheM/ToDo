import dotenv from "dotenv";

dotenv.config();

const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || "";
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || "";
const MONGO_DB_URL = `mongodb+srv://ahmadadmin:ahmadadmin@todo.kwmhcg2.mongodb.net/retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8080;

export const config = {
  mongo: {
    url: MONGO_DB_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
