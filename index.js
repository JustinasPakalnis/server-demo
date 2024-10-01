import express from 'express';
import { reqLog } from './middleware/reqLog.js';
import { apiRouter } from './router/apiRouter.js';
import { PageHome } from './pages/PageHome.js';
import { PageNotFound } from './pages/PageNotFound.js';
import { PageLogin } from './pages/PageLogin.js';
import { PageContactUs } from './pages/PageContactUs.js';
import { PageRegister } from './pages/PageRegister.js';
import { PageSecret } from './pages/PageSecret.js';
import { PageService } from './pages/PageService.js';
import { PageServiceNotFound } from './pages/PageServiceNotFoundjs.js';
import { PageServices } from './pages/PageServices.js';

const app = express();
const port = 5114;

app.use(express.static('public'));

// global middlewares
app.use(reqLog);

app.use('/api', apiRouter);

// routes

app.get('/', (req, res) => res.send(new PageHome().render()));
app.get('/login', (req, res) => res.send(new PageLogin().render()));

app.get('/contact-us', (req, res) => res.send(new PageContactUs().render()));
app.get('/services', (req, res) => res.send(new PageServices().render()));
app.get('/services/:name', (req, res) => {
    const services = {
        html: 'HTML yra cool',
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it',
    };

    if (services[req.params.name]) {
        // return res.send(pageService(req, req.params.name, services[req.params.name]));
        return res.send(new PageService().render());
    } else {
        return res.send(new PageServiceNotFound().render());
    }
});
app.get('/register', (req, res) => res.send(new PageRegister().render()));
app.get('/secret', (req, res) => res.status(401).send(new PageSecret().render()));

app.get('*', (req, res) => res.status(404).send(new PageNotFound().render()));

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
});