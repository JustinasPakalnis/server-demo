import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { pageContactUs } from './pages/pageContactUs.js';
import { pageLogin } from './pages/pageLogin.js';
import { pageRegister } from './pages/pageRegister.js';
import { pageSecret } from './pages/pageSecret.js';
import { pageNotFound } from './pages/pageNotFound.js';
import { pageServices } from './pages/pageServices.js';
import { pageService } from './pages/pageService.js';
import { pageServiceNotFound } from './pages/pageServiceNotFound.js';
import { reqLog } from './middleware/reqLog.js';
import { apiRouter } from './router/apiRouter.js';
import { PageHome } from './pages-oop/PageHome.js';
import { PageNotFound } from './pages-oop/PageNotFound.js';
import { PageLogin } from './pages-oop/PageLogin.js';

const app = express();
const port = 5114;

app.use(express.static('public'));

// global middlewares
app.use(reqLog);

app.use('/api', apiRouter);

// routes

app.get('/', (req, res) => res.send(new PageHome().render()));
app.get('/login', (req, res) => res.send(new PageLogin().render()));

app.get('/contact-us', (req, res) => res.send(pageContactUs(req)));
app.get('/services', (req, res) => res.send(pageServices(req)));
app.get('/services/:name', (req, res) => {
    const services = {
        html: 'HTML yra cool',
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it',
    };

    if (services[req.params.name]) {
        return res.send(pageService(req, req.params.name, services[req.params.name]));
    } else {
        return res.send(pageServiceNotFound(req, req.params.name));
    }
});
app.get('/register', (req, res) => res.send(pageRegister(req)));
app.get('/secret', (req, res) => res.status(401).send(pageSecret(req)));

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