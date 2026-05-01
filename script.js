document.addEventListener('DOMContentLoaded', () => {
    // Dropdown toggle logic
    const catGroups = document.querySelectorAll('.cat-group');

    catGroups.forEach(group => {
        const toggleLink = group.querySelector('.cat-link');
        
        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real app, this would expand/collapse
            // For now, we just toggle the active class for styling demonstration
            group.classList.toggle('active');
            
            const icon = toggleLink.querySelector('.dropdown-icon');
            if(group.classList.contains('active')) {
                icon.classList.remove('ph-caret-down');
                icon.classList.add('ph-caret-up');
            } else {
                icon.classList.remove('ph-caret-up');
                icon.classList.add('ph-caret-down');
            }
        });
    });

    // Font size controls
    const html = document.documentElement;
    let currentFontSize = 16; // default 16px

    const btnInc = document.querySelector('button[title="Increase Font Size"]');
    const btnDec = document.querySelector('button[title="Decrease Font Size"]');
    const btnDef = document.querySelector('button[title="Default Font Size"]');

    if(btnInc && btnDec && btnDef) {
        btnInc.addEventListener('click', () => {
            if(currentFontSize < 20) {
                currentFontSize += 2;
                html.style.fontSize = `${currentFontSize}px`;
            }
        });

        btnDec.addEventListener('click', () => {
            if(currentFontSize > 12) {
                currentFontSize -= 2;
                html.style.fontSize = `${currentFontSize}px`;
            }
        });

        btnDef.addEventListener('click', () => {
            currentFontSize = 16;
            html.style.fontSize = `${currentFontSize}px`;
        });
    }

    // Sort options toggle
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.preventDefault();
            sortOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });

    // Micro-interaction on Cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const btn = card.querySelector('.btn-more');
            if(btn) {
                btn.classList.add('btn-primary');
                btn.classList.remove('btn-outline-primary');
            }
        });

        card.addEventListener('mouseleave', () => {
            const btn = card.querySelector('.btn-more');
            if(btn) {
                btn.classList.add('btn-outline-primary');
                btn.classList.remove('btn-primary');
            }
        });
    });
});
