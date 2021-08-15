import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
// database connection
import database from "./configs/db.js";

const app = express();
const __dirname = path.resolve();
config();

database();

// import routers
// import testRoutes from "./routes/testRoutes.js";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
if (process.env.DB_MODE === 'development') {
  app.use(morgan('dev'))
}
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// app.use("/api/test", testRoutes);

// Run Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
