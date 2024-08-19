import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import axios from "axios";

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('short'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log('The server is running on port: ' + PORT);
});