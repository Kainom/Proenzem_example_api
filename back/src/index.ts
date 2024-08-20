import express = require("express");
import userRoutes from "./routes/userRoutes";
import cors = require("cors");
const app = express();
app.get("/", (req: any, res: any): any => {
  const data: Object = {
    name: "Kainom",
    age: "21",
  };
  res.status(200).header("Access-Control-Allow-Origin", "*").json({
    data,
    enter: true,
  });
});

const options = {
  origin: "*",
  credentials: true,
};

app.use(express.json());
app.use(cors(options));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, (): any => {
  return console.log("I'm running");
});

app.use("/users", userRoutes);
