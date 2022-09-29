const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

const port = 6050;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

var corsOptions = {
    origin: ["http://localhost:8081"]
};
app.use(cors(corsOptions))


const db = require("../node-basic/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require('./routes/posts.routes')(app)



app.get('/', (req, res) => {
    res.json({info:"Server Online"});
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
    console.log(`Server running on port: ` + port)
})


