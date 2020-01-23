const bodyParser = require("body-parser");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile("index.html", { root: __dirname });
  });
};
