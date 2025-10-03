document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('sideMenu');

    console.log('menu button and nav found:', !!btn, !!menu);

    if (!btn) {
        console.error('Hamburger button not found (id="hamburger")');
        return;
    }
    if (!menu) {
        console.error('Side menu not found (id="sideMenu")');
        return;
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // щоб кліки не "падали" на document
        const isOpen = menu.classList.toggle('open');
        btn.classList.toggle('active', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        console.log('hamburger clicked — open:', isOpen);
    });

    // Закрити меню кліком поза ним
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('open')) return;
        const target = e.target;
        if (target === btn || btn.contains(target) || menu.contains(target)) return;
        menu.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        console.log('menu closed by outside click');
    });

    // Закрити Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            console.log('menu closed by Escape');
        }
    });
});
