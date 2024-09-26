import { carGallery } from "../components/carGallery.js";
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
                <section class="counter">
                    <button class="btn" type="button">-</button>
                    <span class="value">0</span>
                    <button class="btn" type="button">+</button>
                </section>
                ${carGallery()}
            </main>
            ${footer(req.pageVisitsCount)}
            <script src="/js/home.js" type="module"></script>
        </body>
        </html>`;
}