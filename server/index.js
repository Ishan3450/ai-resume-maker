const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const resumeRouter = require("./routes/resumeRoute");

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/resumes", resumeRouter);

app.listen(3000, () => {
    connectDB();
    console.log("Server started");
})