import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

// database connection
import {mongodbConnect, mysqlConnect, mysqlRemoteConnect} from "./configs/db.js";

const app = express();
config();

// mongodbConnect();
mysqlRemoteConnect();

// if (process.env.NODE_MODE === "development") {
//   mysqlConnect();
// } else if (process.env.NODE_MODE === "production") {
//   mysqlRemoteConnect();
// }


// import routers
import employeesRoutes from "./routes/employeesRoutes.js";

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
app.use("/api/v1/employees", employeesRoutes);

// Run Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
