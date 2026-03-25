import mongoose from "mongoose";

// 🔹 User Schema banta hai -> Yeh batata hai ki database me user ka data kaise store hoga
// 🔹 Har field (username, email, password) ka type, rules aur settings yaha define hote hai

const userSchema = new mongoose.Schema(
  {
    // 👉 username field
    // Kyun? — Har user ka unique naam chahiye login ke liye
    username: {
      type: String,     // string format me hoga
      required: true,   // bina username ke user create nahi hoga
      unique: true,     // do users ka username same nahi ho sakta
      lowercase: true,  // automatically lowercase me convert ho jayega
    },

    // 👉 email field
    // Kyun? — Email se login / communication hota hai
    email: {
      type: String,
      required: true,
      unique: true,     // same email se do accounts nahi banenge
      lowercase: true,
    },

    // 👉 password field
    // Kyun? — User authentication ke liye zaroori
    password: {
      type: String,
      required: true,   // password compulsory hai
    },
  },

  {
    // 👉 timestamps: true
    // Yeh "createdAt" aur "updatedAt" fields automaticamente add kar deta hai
    timestamps: true,
  }
);

// 👉 Model banaya — iss se hum database me collection create karte hain
export const User = mongoose.model("User", userSchema);
