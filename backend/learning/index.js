/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var uuid = require('node-uuid')

const app = express();
const port = process.env.PORT || 3000;


morgan.token('id', function getId (req) {
    return req.id
  })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(assignId);

const todo = require("./routes/getToDo")();


app.use('/api/v1/', todo);

app.get("/", function (req, res) {
    res.json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.info(`Server Running at port ${port}`);
});

function assignId (req, res, next) {
    req.id = uuid.v4()
    next()
};