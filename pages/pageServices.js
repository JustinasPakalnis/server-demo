import { PageTemplate } from "./PageTemplate.js";

export class PageServices extends PageTemplate {
    main() {
        return `
            <main>
                <h1>Services page</h1>
                <nav>
                    <a href="/services/html">HTML</a>
                    <a href="/services/css">CSS</a>
                    <a href="/services/js">JS</a>
                    <a href="/services/git">GIT</a>
                </nav>
            </main>`;
    }
}