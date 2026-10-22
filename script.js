(() => {
    'use strict';

    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('[data-category]');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationLinks = document.querySelector('.nav__links');

    const filter_projects = (category) => {
        projectCards.forEach((card) => {
            card.hidden = category !== 'all' && !card.dataset.category.split(' ').includes(category);
        });

        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === category;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    };

    const close_mobile_menu = () => {
        navigationLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
    };

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => filter_projects(button.dataset.filter));
    });

    menuToggle.addEventListener('click', () => {
        const isOpen = navigationLinks.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navigationLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', close_mobile_menu);
    });

    document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
