import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class Database {
  static connect() {
    try {
      mongoose
        .connect(process.env.DB_URL)
        .then(() => {
          console.log("Database is Connected Successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
}
export default Database;
