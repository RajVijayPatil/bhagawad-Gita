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

const config = {
    headers: {
        'x-rapidapi-key': 'e50a0cc3d1msh8af5f48ac4c1c67p19b9cbjsne83aeef2fc2e',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

app.post('/getinfo', async (req, res) => {
    const chapter = req.body.chapters;
    try {
        const result = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/`, config);
        console.log(result.data);
        res.render('content.ejs', { information: result.data });
    } catch (error) {
        console.error(error);
        res.send('Error occured while fetching data.');
    }
});

app.listen(PORT, () => {
    console.log('The server is running on port: ' + PORT);
});