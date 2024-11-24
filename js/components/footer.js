class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>TheAiFolks</h3>
                        <p>Transforming enterprises with AI-powered solutions</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <a href="index.html">Home</a>
                        <a href="templates.html">Templates</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Get Started</a>
                    </div>
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>Email: info@theaifolks.org</p>
                        <p>Podcast: @theaifolks</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} TheAiFolks. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
