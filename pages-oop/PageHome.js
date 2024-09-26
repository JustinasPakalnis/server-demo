import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        return `
            <main>
                <h1>Home page</h1>
                <section class="counter">
                    <button class="btn" type="button">-</button>
                    <span class="value">0</span>
                    <button class="btn" type="button">+</button>
                </section>
                <section class="gallery">
                    <img src="/img/car/1.jpg" alt="Hero car 1" />
                    <img src="/img/car/2.jpg" alt="Hero car 2" />
                    <img src="/img/car/3.jpg" alt="Hero car 3" />
                    <img src="/img/car/4.jpg" alt="Hero car 4" />
                </section>
            </main>`;
    }
}