import { PageTemplate } from "./PageTemplate.js";

export class PageService extends PageTemplate {
    main() {
        return `
            <main>
                <h1>{{SERVICE NAME}} page</h1>
                <p>{{SERVICE DESCRIPTION}}</p>
            </main>`;
    }
}