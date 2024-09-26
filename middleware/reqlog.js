import { counter } from "../data/counter.js";

export function reqLog(req, res, next) {
    console.log('>>>', req.url);
    console.log('Uzklausos laikas:', Date.now());

    counter.value++;

    if (!req.pageVisitsCount) {
        req.pageVisitsCount = 1;
    } else {
        req.pageVisitsCount++;
    }

    next();
}