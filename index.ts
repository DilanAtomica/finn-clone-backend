const express = require("express");
const app = express();
const cors = require("cors");
const rateLimit = require('express-rate-limit')

app.use(express.json());

const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true,
    legacyHeaders: false,
})

app.use(limiter);

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});