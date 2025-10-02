document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('sideMenu');

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menu.setAttribute('aria-hidden', !isOpen);
    });
});
