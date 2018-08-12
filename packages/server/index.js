import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import serveIndex from 'serve-index';
const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api', function (req, res) {
    res.send("http://www.mysite.com/");
});
app.get('*', express.static('public'), serveIndex('public', { 'icons': true }));

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));