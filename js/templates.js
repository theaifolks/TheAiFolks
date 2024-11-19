document.addEventListener('DOMContentLoaded', () => {
    // Template data with descriptions and URLs
    const templateData = {
        'business-1': {
            title: 'Corporate Pro',
            description: 'A professional business template perfect for corporate websites. Features modern design, multiple page layouts, and sections for team, services, and portfolio.',
            url: 'https://startbootstrap.github.io/startbootstrap-modern-business/'
        },
        'business-2': {
            title: 'Startup Launch',
            description: 'Dynamic and engaging template designed for startups and tech companies. Includes animated sections, call-to-action blocks, and feature highlights.',
            url: 'https://startbootstrap.github.io/startbootstrap-agency/'
        },
        'portfolio-1': {
            title: 'Creative Portfolio',
            description: 'Showcase your creative work with this stunning portfolio template. Features masonry grid layout, project details modal, and smooth animations.',
            url: 'https://startbootstrap.github.io/startbootstrap-creative/'
        },
        'portfolio-2': {
            title: 'Minimal Showcase',
            description: 'Clean and minimal portfolio template perfect for designers and photographers. Includes fullscreen gallery, project filtering, and contact form.',
            url: 'https://startbootstrap.github.io/startbootstrap-freelancer/'
        },
        'ecommerce-1': {
            title: 'Shop Elite',
            description: 'Feature-rich e-commerce template with modern design. Includes product grid, shopping cart, checkout process, and product detail pages.',
            url: 'https://startbootstrap.github.io/startbootstrap-shop-homepage/'
        },
        'ecommerce-2': {
            title: 'Boutique',
            description: 'Elegant e-commerce template for fashion and lifestyle stores. Features lookbook layout, quick view modal, and wishlist functionality.',
            url: 'https://startbootstrap.github.io/startbootstrap-shop-item/'
        }
    };

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            templateCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('templateModal');
    const modalFrame = document.getElementById('modalFrame');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close-modal');

    // Open modal
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const templateId = btn.getAttribute('data-template');
            const template = templateData[templateId];

            if (template) {
                modalFrame.src = template.url;
                modalTitle.textContent = template.title;
                modalDescription.textContent = template.description;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
            }
        });
    });

    // Close modal
    const closeModalFunction = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalFrame.src = ''; // Clear iframe source
        }, 300);
    };

    closeModal.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalFunction();
        }
    });

    // Add animation for template cards
    const animateTemplateCards = () => {
        templateCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    };

    // Initialize animations
    animateTemplateCards();
});
