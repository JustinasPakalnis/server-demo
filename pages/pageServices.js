import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageServices(req) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>Services page</h1>
                <nav>
                    <a href="/services/html">HTML</a>
                    <a href="/services/css">CSS</a>
                    <a href="/services/js">JS</a>
                    <a href="/services/git">GIT</a>
                </nav>
            </main>
            ${footer(req.pageVisitsCount)}
        </body>
        </html>`;
}