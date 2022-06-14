import { DataSource } from "typeorm";
import { User } from "../entities/user";

let myDataSource: DataSource;

async function connectDb() {
  console.log("connecting to database");
  if (!myDataSource) {
    console.log("connection is going to established");
    myDataSource = new DataSource({
      type: "mongodb",
      url: "mongodb+srv://rohit:rohit12345@cluster0.wbeis.mongodb.net/test?retryWrites=true&w=majority",
      useNewUrlParser: true,
      logging: true,
      synchronize: true,
      entities: [User],
    });

    try {
      await myDataSource.initialize();
    } catch (error) {
      console.log(error);
    }
    console.log("connection established");
  }
  console.log(myDataSource.isInitialized);
  return myDataSource;
}

export default connectDb;
