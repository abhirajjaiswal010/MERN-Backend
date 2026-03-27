import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDB } from "./Db/db.js";
import chalk from "chalk";
import { router as authRoutes} from "./routes/authRoutes.js" ;
import { router as homeRoutes } from "./routes/homeRoutes.js";
import { router as adminRoutes } from "./routes/adminRoutes.js";
const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());
app.use("/api/home", homeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log();

  console.log(
    chalk.bgCyanBright(`Server is running at http://localhost:${PORT}`),
  );
});
