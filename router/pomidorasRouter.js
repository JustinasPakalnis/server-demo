import express from 'express';

export const pomidorasRouter = express.Router();

let pomidoras = 0;

pomidorasRouter.get('/', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Stai tavo pomidoru kiekis: ' + pomidoras,
    });
});

pomidorasRouter.get('/add', (req, res) => {
    pomidoras++;

    return res.json({
        status: 'success',
        msg: 'Pomidoras pridetas',
    });
});

pomidorasRouter.get('/remove', (req, res) => {
    pomidoras--;

    return res.json({
        status: 'success',
        msg: 'Pomidoras isimtas',
    });
});

pomidorasRouter.get('/*', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Pomidoras neturi tokio funkcionalumo',
    });
});