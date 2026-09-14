

document.addEventListener('DOMContentLoaded', () => {
    
    
    
    function openModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.remove('hidden');
        modalEl.classList.add('modal-open');
        document.body.classList.add('overflow-hidden');

        
        setTimeout(() => {
            const input = modalEl.querySelector('input:not([type=hidden]), select, textarea, button');
            if (input) input.focus();
        }, 100);
    }

    function closeModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.remove('modal-open');
        modalEl.classList.add('modal-closing');
        setTimeout(() => {
            modalEl.classList.remove('modal-closing');
            modalEl.classList.add('hidden');
            
            if (!document.querySelector('.modal.modal-open')) {
                document.body.classList.remove('overflow-hidden');
            }
        }, 200);
    }

    
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-bs-toggle="modal"], [data-modal-target]');
        if (trigger) {
            e.preventDefault();
            const targetSelector = trigger.getAttribute('data-bs-target') || trigger.getAttribute('data-modal-target') || trigger.getAttribute('href');
            if (targetSelector && targetSelector.startsWith('#')) {
                const modalEl = document.querySelector(targetSelector);
                if (modalEl) openModal(modalEl);
            }
            return;
        }

        
        const dismissBtn = e.target.closest('[data-bs-dismiss="modal"], [data-modal-close], .modal-close');
        if (dismissBtn) {
            e.preventDefault();
            const modalEl = dismissBtn.closest('.modal');
            if (modalEl) closeModal(modalEl);
            return;
        }

        
        if (e.target.classList.contains('modal') && e.target.classList.contains('modal-open')) {
            closeModal(e.target);
        }
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            const openModalEl = document.querySelector('.modal.modal-open');
            if (openModalEl) {
                closeModal(openModalEl);
            }
        }
    });

    
    
    
    document.addEventListener('click', (e) => {
        const alertDismiss = e.target.closest('[data-bs-dismiss="alert"], [data-alert-close]');
        if (alertDismiss) {
            e.preventDefault();
            const alertBox = alertDismiss.closest('.alert');
            if (alertBox) {
                alertBox.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                alertBox.style.opacity = '0';
                alertBox.style.transform = 'translateY(-10px)';
                setTimeout(() => alertBox.remove(), 260);
            }
        }
    });

    
    
    
    const navToggler = document.querySelector('.navbar-toggler, [data-nav-toggle]');
    const navMenu = document.querySelector('#navbarNav, .nav-collapse');
    if (navToggler && navMenu) {
        navToggler.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            navMenu.classList.toggle('hidden');
        });
    }

    
    
    
    const currentPath = window.location.pathname;
    document.querySelectorAll('.bottom-nav .nav-link').forEach((link) => {
        const href = link.getAttribute('href');
        if (href && (currentPath === href || (href !== '/' && currentPath.startsWith(href)))) {
            link.classList.add('active');
        }
    });
});
