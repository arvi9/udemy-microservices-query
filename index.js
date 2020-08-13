const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
//Posts Example
// posts ===
//   {
//     "1": {
//       id: "1",
//       title: "post title",
//       comments: [
//         { id: "1", content: "comment!" },
//         { id: "2", content: "comment!" },
//       ],
//     },
//   };

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[i] = { id, title, comments: [] };
  }
  if (type === "CommentsCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    console.log(post);
    post.comments.push({ id, content });
  }
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
