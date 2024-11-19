class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="index.html" class="logo">TheAiFolks</a>
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="ai-solutions.html">Enterprise Solutions</a>
                    <a href="templates.html">Digital Solutions</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html" class="cta-button">Schedule Demo</a>
                </div>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        `;

        // Set active class for current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const activeLink = this.querySelector(`a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Add menu button functionality
        const menuBtn = this.querySelector('.menu-btn');
        const navLinks = this.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

customElements.define('header-component', Header);
