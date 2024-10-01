import { PageTemplate } from "./PageTemplate.js";

export class PageSecret extends PageTemplate {
    main() {
        return `
            <main>
                <h1>Secret page</h1>
            </main>`;
    }
}