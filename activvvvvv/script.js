// Bootstrap Native Client-Side Form Validation & Success Handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successAlert = document.getElementById('successAlert');

    if (form) {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent form reload for demonstration
                successAlert.classList.remove('d-none');
                form.reset();
                form.classList.remove('was-validated');
                
                // Hide success banner automatically after 5 seconds
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 5000);
            }

            form.classList.add('was-validated');
        }, false);
    }
});