import { config } from "dotenv";
import mongoose from "mongoose";
import mysql from "mysql";
config();

let MONGODB_URL;
if (process.env.NODE_MODE === "development") {
  MONGODB_URL = process.env.MONGODB_URL_DEV;
} else if (process.env.NODE_MODE === "production") {
  MONGODB_URL = process.env.MONGODB_URL_PRODUCTION;
}

// <============ mongodb ============>
const mongodbConnect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() =>
      console.log(`MongoDB database connected in ${process.env.NODE_MODE} mode`)
    )
    .catch((err) => console.log(err.message));
};

// <============ mysql ============>
const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const mysqlRemoteConnection = mysql.createPool({
//   connectionLimit: 100,
//   host: process.env.DB_REMOTE_HOST,
//   port: 3306,
//   user: process.env.DB_REMOTE_USER,
//   password: process.env.DB_REMOTE_PASSWORD,
//   database: process.env.DB_REMOTE_NAME,
// });

const mysqlRemoteConnection2 = mysql.createPool({
  connectionLimit: 100,
  host: "db4free.net",
  port: 3306,
  user: "devarif",
  password: "Arif12345",
  database: "hr_devarif",
});

const mysqlConnect = () => {
  mysqlConnection.connect((err) => {
    if (err) {
      console.log(
        `Error connecting to MySQL: ${JSON.stringify(err, undefined, 2)}`
      );
    } else {
      console.log(`MySQL database connected in ${process.env.NODE_MODE} mode`);
    }
  });
};

const mysqlRemoteConnect = function (callback) {
  mysqlRemoteConnection2.getConnection(function (err, conn) {
    if (err) {
      console.log(
        `Error connecting to MySQL: ${JSON.stringify(err, undefined, 2)}`
      );
    } else {
      console.log(`MySQL database connected in REMOTE mode`);
    }
  });
};

export { mongodbConnect, mysqlConnect, mysqlRemoteConnect, mysqlConnection };
