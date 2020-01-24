const bodyParser = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");
let results=[];

fs.createReadStream('Artathon_SentimentsnEmotions.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });


module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile("index.html", { root: __dirname });
  });

  app.get("/csv", (req, res)=>{
    res.status(200).json(results);
  });
};
