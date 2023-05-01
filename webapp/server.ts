import express, {Application} from 'express';
import path from 'path';
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs

var app: Application = express()
const port: number = 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (): void => {
    console.log('Webapp started on port ' + port);
}).on("error", (error: Error) => {
    console.error('Error occured: ' + error.message);
});