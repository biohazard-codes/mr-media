import mongoose from "mongoose";
async function connectdb() {
  try {
    const dbUrl = process.env.DATABASE_URL;
    const db = await mongoose.connect(dbUrl);
    console.log("Database connection successfull ! ");
  } catch (error) {
    console.log(error);
  }
}
export default connectdb;
