import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageHome(req) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>Home page</h1>
                <img src="/img/hero1.jpg" alt="Hero 1" />
                <img src="/img/hero2.jpg" alt="Hero 2" />
                <img src="/img/hero3.jpg" alt="Hero 3" />
            </main>
            ${footer(req.pageVisitsCount)}
        </body>
        </html>`;
}
