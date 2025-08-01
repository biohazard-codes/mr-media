"use server";
import User from "../../models/user";
import connectdb from "../dbConnect";
import bcrypt from "bcryptjs";

async function signin(data) {
  await connectdb();
  // checking userName
  const isUserExist = await User.findOne({
    userName: data.userName,
  });

  if (!isUserExist) {
    return {
      success: false,
      message: "inncorret credintals",
    };
  }

  // checking password
  const isPasswordMatched = await bcrypt.compare(
    data.password,
    isUserExist.password
  );

  if (isPasswordMatched) {
    return {
      success: true,
      message: "Login successfull !",
      user: {
        userName: isUserExist.userName,
        id: isUserExist._id.toString(),
        firstName: isUserExist.firstName,
        image: isUserExist.image,
      },
    };
  } else {
    return {
      success: false,
      message: "Incorrect credintals",
    };
  }
}

export { signin };
