import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageSecret(req) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>Secret page</h1>
            </main>
            ${footer(req.pageVisitsCount)}
        </body>
        </html>`;
}