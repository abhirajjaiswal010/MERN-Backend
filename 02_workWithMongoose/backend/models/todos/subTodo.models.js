import mongoose from "mongoose";

// 🔹 Todo Schema: Yeh batata hai ki ek TODO item database me kaise store hoga
// 🔹 Iss schema me content, status, kis user ne banaya, aur sub-todos ka system hai

const todoSchema = new mongoose.Schema(
  {
    // 👉 Content (Todo ka main text / task)
    // Kyun? — User kya kaam add kar raha hai, woh yahan store hota hai
    Content: {
      type: String,     // text format
      required: true,   // todo bina content ke create nahi hoga
    },

    // 👉 complete (Todo completed hai ya nahi)
    // Kyun? — Task ka status track karne ke liye
    complete: {
      type: Boolean,     // true/false
      default: false,    // by default todo incomplete hota hai
    },

    // 👉 createdBy (kis user ne yeh todo banaya)
    // Kyun? — User-specific todos maintain karne ke liye
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // User ID reference
      ref: "User",                          // User model se link
      required: true,                       // Har todo kisi user ka hona chahiye
    },

    // 👉 subTodos (Todo ke andar chote tasks)
    // Kyun? — Ek todo ke multiple steps ho sakte hai
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",   // SubTodo model se linked array
      },
    ],
  },

  {
    // 👉 timestamps: true
    // Yeh createdAt aur updatedAt fields automatically add karta hai
    timestamps: true,
  }
);

// 👉 Model banaya — ab Todo collection se database me kaam kiya ja sakta hai
export const Todo = mongoose.model("Todo", todoSchema);
