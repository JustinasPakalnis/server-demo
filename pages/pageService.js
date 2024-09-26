import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageService(req, h1, p) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>${h1} page</h1>
                <p>${p}</p>
            </main>
            ${footer(req.pageVisitsCount)}
        </body>
        </html>`;
}