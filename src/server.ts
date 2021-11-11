import express from "express";
import internalRouter from "./internal";

const app = express();

app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/internal", internalRouter);

app.get("/", (req, res) => {
    res.sendFile("./static/index.html");
});

app.listen(80, () => {
    console.log("Server running...");
});