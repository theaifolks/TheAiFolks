class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Shilpi</h3>
                        <p>Transforming enterprises with AI-powered solutions</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <a href="index.html">Home</a>
                        <a href="templates.html">Templates</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Get Quote</a>
                    </div>
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>Email: info@shilpi.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Shilpi. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
