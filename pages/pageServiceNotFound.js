import { PageTemplate } from "./PageTemplate.js";

export class PageServiceNotFound extends PageTemplate {
    main() {
        return `
            <main>
                <p>Paslauga "{{SERVICE NAME}}" nera teikiama</p>
            </main>`;
    }
}