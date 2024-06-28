import dotenv from "dotenv";
import path from "path";

//cwd means current working directory
dotenv.config({ path: path.join((process.cwd(), ".env")) });
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
