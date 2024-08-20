const express = require("express");
const  cors = require("cors");
const helmet = require('helmet');
const app = express();
app.get("/", (req, res) => {
    const data = {
        name: "Kainom",
        age: "20",
    }
    res.status(200).header('Access-Control-Allow-Origin','*').json({
        data,
        enter: true,
    });

//    res.status(400).json({
//     name: "Kainom",
//     age: "20",
//   });
});

const options ={
  origin: "*",
  credentials: true,
}

app.use(express.json());
app.use(cors(options));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  return console.log("I'm running");
});

// app.use("/users", userRoutes);

