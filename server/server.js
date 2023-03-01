const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./Routes/route.js");

let corsOptions = {
  origin: "http://localhost:4000/",
};

let app = express();
app.disable("x-powered-by");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.nmwed3m.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log('Database Connected.....'))
.catch((err) => console.log('error' , err))
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", route);

app.listen(4000, console.log("running at port 4000....."));
