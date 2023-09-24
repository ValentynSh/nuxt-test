import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = "mongodb+srv://testUser:testpassword@atlascluster.ueleqq3.mongodb.net/?retryWrites=true&w=majority"
  // config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri, {dbName : 'UsersDB'});
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
