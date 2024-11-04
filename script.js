// Get the modal element
const popupForm = document.getElementById("popupForm");

// Get the close button element
const closeButton = document.querySelector(".close-btn");


// Flag to track if the pop-up has been closed or submitted
let popupClosed = false;

// Show the popup for the first time after 5 seconds, if not closed
setTimeout(() => {
    if (!popupClosed) {
        showPopup();
    }
}, 5000);

// Event listener for closing the modal
if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}

// Event listener for form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission for demonstration
        closePopup();
    });
}

// Function to show the popup
function showPopup() {
    popupForm.style.display = "flex"; // Show pop-up
    popupForm.classList.add("fade-in"); // Optional: Add a class for animations
}

// Function to close the popup
function closePopup() {
    popupForm.classList.remove("fade-in"); // Remove fade-in class for the next open
    popupForm.style.display = "none"; // Close the pop-up
    popupClosed = true; // Set the flag to indicate that the pop-up has been closed
}

// Optional: Add event listener for clicking outside the modal to close it
window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        closePopup();
    }
});
