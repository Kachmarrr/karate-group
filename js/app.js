document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('sideMenu');

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menu.setAttribute('aria-hidden', !isOpen);
    });

    // закриття меню при натисканні на посилання
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menu.setAttribute('aria-hidden', true);
        });
    });
});
