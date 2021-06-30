import express from "express";
import cors from "cors";

const app = express();

/**
 * options for cors midddleware
 * Documentation: https://expressjs.com/en/resources/middleware/cors.html
 */
const options = {
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
};

var router = express.Router();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 8080);

app.options("*", cors(options)); //enable pre-flight

// This root is needed if you want to run this in the cloud
router.get("/", async(req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

try {
    app.listen(app.get("port"), () => {
        console.log("the server is running on port", app.get("port"));
    });
} catch (error) {
    console.log(error);
}