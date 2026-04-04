document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        timestamp.value = now.toLocaleString('en-US', options);
    }
});

const buttons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        if (modal) {
            modal.showModal();
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dialog = button.closest("dialog");
        if (dialog) {
            dialog.close();
        }
    });
});