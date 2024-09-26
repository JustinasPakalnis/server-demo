import { counter } from "../data/counter.js";

export function footer(count) {
    return `
        <footer class="main-footer">
            &copy; ${new Date().getFullYear()} - Apsilankymų kiekis: ${counter.value}
        </footer>`;
}