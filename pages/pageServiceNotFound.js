import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageServiceNotFound(req, h1) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <p>Paslauga "${h1}" nera teikiama</p>
            </main>
            ${footer(req.pageVisitsCount)}
        </body>
        </html>`;
}