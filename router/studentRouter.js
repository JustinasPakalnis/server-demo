import express from 'express';

export const studentRouter = express.Router();

let students = [];

studentRouter.get('/', (req, res) => {
    return res.json({
        studentCount: students.length,
    });
});

studentRouter.get('/add', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Reikia nurodyti varda',
    });
});

studentRouter.get('/add/:name', (req, res) => {
    for (const student of students) {
        if (student.name === req.params.name) {
            return res.json({
                status: 'error',
                msg: 'Toks studentas jau yra uzregistruotas',
            });
        }
    }

    students.push({
        name: req.params.name,
        marks: [],
    });

    return res.json({
        status: 'success',
        msg: 'Pridetas naujas studentas',
    });
});

studentRouter.get('/remove', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Reikia nurodyti varda',
    });
});

studentRouter.get('/remove/:name', (req, res) => {
    const prev = students.length;
    students = students.filter(s => s.name !== req.params.name);
    const curr = students.length;

    if (prev === curr) {
        return res.json({
            status: 'error',
            msg: 'Norimas pasalinti studentas nerastas',
        });
    }

    return res.json({
        status: 'success',
        msg: 'Studentas pasalintas',
    });
});

studentRouter.get('/names', (req, res) => {
    if (students.length === 0) {
        return res.json({
            status: 'error',
            msg: 'Nera uzregistruotas nei vienas studentas',
        });
    }

    return res.json({
        status: 'success',
        msg: 'Studentai: ' + students.map(s => s.name).join(', '),
    });
});

studentRouter.get('/:name', (req, res) => {
    const student = students.filter(s => s.name === req.params.name);

    if (student.length === 0) {
        return res.json({
            status: 'error',
            msg: 'Tokio studento nera',
        });
    }

    return res.json({
        status: 'success',
        msg: 'Studentas egzistuoja. Gali suzinoti jo pazymius ir ju vidurki',
    });
});

studentRouter.get('/:name/marks', (req, res) => {
    const student = students.filter(s => s.name === req.params.name)[0];

    if (!student) {
        return res.json({
            status: 'error',
            msg: 'Tokio studento nera',
        });
    }

    if (student.marks.length === 0) {
        return res.json({
            status: 'success',
            msg: 'Studentas dar neturi jokio pazymio',
        });
    }

    return res.json({
        status: 'success',
        msg: 'Studento pazymiai: ' + student.marks.join(', '),
    });
});

studentRouter.get('/:name/marks/add', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Dar neaprasyta logika',
    });
});

studentRouter.get('/:name/marks/add/:mark', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Dar neaprasyta logika',
    });
});

// studentas gauna pazymi
// suzinoti studento pazymiu vidurki
// studentu vardu sarasas ir ju pazymiu vidurkiai

// extra: studentas gali tureti po kelis telefono numerius
// - ar tikrinamas unikalumas tik to vieno studento objekte
// - ar tikrinama tarp visu studentu (teisingas atsakymas 👀)