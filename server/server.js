const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const request = require("request");
const path = require("path");
const http = require("http");
const tweet = require("./util/tweetUtils");
const app = express();
//let port = process.env.PORT || 3000;
let port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

const errorMessage = {
  title: "Please Wait",
  detail: "Waiting for new Tweets to be posted...",
};

app.get("/api/search", async (req, res) => {
  return tweet
    .get(req.query.q, req.query.count)

    .then((response, err) => {
      if (
        response?.resp?.statusCode === 200 ||
        response?.resp?.statusCode === 201
      ) {
        res.send(response);
      } else {
        res.status(400).send(errorMessage);
      }
    })
    .catch((error) => {
      console.log("caught error", error.stack);
      return res.send(error);
    });
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("*", (request, res) => {
//     res.sendFile(path.join(__dirname, "../build", "index.html"));
//   });
// } else {
//   port = 3001;
// }

server.listen(port, () => console.log(`Listening on port ${port}`));
