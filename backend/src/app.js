const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.get("/", (req, res) => {
  res.send("Backend");
});

//key name must be same as in postman when test-> image
app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const result = await uploadFile(req.file.buffer);
    await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    // console.log(req.body);
    // console.log(result.url);

    res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: `fail to create post ${error.message}`,
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();

    res.status(200).json({
      message: "post fetch successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: `fetch to fail${error.message}`,
    });
  }
});

module.exports = app;
