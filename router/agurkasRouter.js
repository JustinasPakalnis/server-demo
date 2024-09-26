import express from 'express';

export const agurkasRouter = express.Router();

agurkasRouter.get('/', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Stai tavo agurkas',
    });
});

agurkasRouter.get('/add', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Agurkas pridetas',
    });
});

agurkasRouter.get('/remove', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Agurkas isimtas',
    });
});

agurkasRouter.get('/*', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Agurkas neturi tokio funkcionalumo',
    });
});