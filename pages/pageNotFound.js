import { PageTemplate } from "./PageTemplate.js";

export class PageNotFound extends PageTemplate {
    main() {
        return `
            <main>
                <h1>404</h1>
                <p>Page not found</p>
            </main>`;
    }
}