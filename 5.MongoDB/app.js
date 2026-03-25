import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://abhiraj500:0zOdDPqgIgiLRR7C@abhirajcluster.m5pjtjv.mongodb.net/",
  )
  .then(() => console.log("db connect successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//user model

const User = mongoose.model("User", userSchema);
async function runQueryExamples() {
  try {
    // const newUser = await User.create({
    //   name: "Abhiraj",
    //   email: "Abhiraj500@gmail.com",
    //   age: "4",
    //   isActive: true,
    //   tags: ["developer"],
    // });
    //   const newUser = await User.create({
    //   name: "raj",
    //   email: "raj500@gmail.com",
    //   age: "4",
    //   isActive: true,
    //   tags: ["developer"],
    // });
    // await newUser.save()

    // console.log("create new user", newUser);

    const allUsers=await User.find({});
    console.log(allUsers);
    
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
