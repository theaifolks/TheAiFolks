document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quoteForm');
    const submitBtn = form.querySelector('.submit-btn');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Google Sheets API endpoint
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx3yqspz40h71LLt5FCcP2XtqdxmhdvSCqIpCr8nhgjcEhfoNO89JvQZdb4TrCV1ga2Xw/exec';

    // Form validation
    const validateForm = () => {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        // Remove existing error messages
        form.querySelectorAll('.error-message').forEach(error => error.remove());

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'This field is required';
                field.parentNode.appendChild(errorMessage);
            }
        });

        // Email validation
        const emailField = form.querySelector('#email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            isValid = false;
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please enter a valid email address';
            emailField.parentNode.appendChild(errorMessage);
        }

        return isValid;
    };

    // Email validation helper
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Prepare form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            // Add timestamp
            data.timestamp = new Date().toISOString();

            // Send data to Google Sheets
            const response = await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // Show success modal
            showSuccessModal();
            form.reset();

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again later.');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    };

    // Modal functions
    const showSuccessModal = () => {
        successModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeSuccessModal = () => {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Event listeners
    form.addEventListener('submit', handleSubmit);
    closeModalBtn.addEventListener('click', closeSuccessModal);
    window.closeSuccessModal = closeSuccessModal; // Make available globally

    // Close modal on outside click
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.style.display === 'flex') {
            closeSuccessModal();
        }
    });

    // Form field validation on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            if (field.hasAttribute('required')) {
                const errorMessage = field.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
                if (!field.value.trim()) {
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.textContent = 'This field is required';
                    field.parentNode.appendChild(error);
                }
            }
        });
    });

    // Email field specific validation
    const emailField = form.querySelector('#email');
    emailField.addEventListener('input', () => {
        const errorMessage = emailField.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        if (emailField.value && !isValidEmail(emailField.value)) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = 'Please enter a valid email address';
            emailField.parentNode.appendChild(error);
        }
    });
});
