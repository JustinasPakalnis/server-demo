import { counter } from "../data/counter.js";

export class PageTemplate {
    constructor() {

    }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Server demo</title>
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="stylesheet" href="/css/components/header.css" />
                <link rel="stylesheet" href="/css/components/footer.css" />
                <link rel="stylesheet" href="/css/components/gallery.css" />
                <link rel="stylesheet" href="/css/components/counter.css" />
            </head>`;
    }

    header() {
        return `
            <header class="main-header">
                <img class="logo" src="/img/logo.png" alt="Logo">
                <nav class="main-nav">
                    <a class="link" href="/">Home</a>
                    <a class="link" href="/services">Services</a>
                    <a class="link" href="/login">Login</a>
                    <a class="link" href="/register">Register</a>
                    <a class="link" href="/contact-us">Contact us</a>
                </nav>
            </header>`;
    }

    main() {
        return `
            <main>
                <h1>THIS IS PAGE TEMPLATE</h1>
                <p>Please overwrite!</p>
                <p>Thank you very much!</p>
            </main>`;
    }

    footer() {
        return `
            <footer class="main-footer">
                &copy; ${new Date().getFullYear()} - Apsilankymų kiekis: ${counter.value}
            </footer>`;
    }

    script() {
        return `<script src="/js/home.js" type="module"></script>`;
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()} 
            <body>
                ${this.header()}
                ${this.main()}
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}