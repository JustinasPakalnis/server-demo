export function carGallery() {
    let HTML = '';

    for (let i = 1; i <= 20; i++) {
        HTML += `<img src="/img/car/${i}.jpg" alt="Hero car ${i}" />`;
    }

    return `<section class="gallery">${HTML}</section>`;
}