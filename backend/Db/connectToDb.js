import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.mongoose_Uri);
    console.log("connected to the database");
  } catch (error) {
    console.log("error occured while connecting to the db:", error.message);
  }
  //   console.log(process.env.mongoose_Uri);
};

export default connectToDb;
