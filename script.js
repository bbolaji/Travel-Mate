// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Event Listener for Notification Setup Form Submission
    const notificationForm = document.querySelector('#notification-setup form');
    notificationForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting to server

        // Get form data
        const email = document.querySelector('#email').value;
        const notificationType = document.querySelector('#notification-type').value;

        // Simple Validation to check if email is provided
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show confirmation to user
        alert(`Notification for ${notificationType} has been set up for ${email}!`);
    });

    // Event Listener for Calendar Sync Form Submission
    const calendarSyncForm = document.querySelector('#calendar-sync form');
    calendarSyncForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting to server

        // Get form data
        const calendarService = document.querySelector('#calendar-service').value;

        // Show confirmation to user
        alert(`Calendar sync initiated with ${calendarService}.`);
    });

    // Function to Validate Email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.getElementById('notification-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const clientName = document.getElementById('client-name').value;
    const visaType = document.getElementById('visa-type').value;
    const consulate = document.getElementById('consulate').value;
    const preferredDates = document.getElementById('preferred-dates').value;
    const urgentClient = document.getElementById('urgent-client').checked;
    const notificationDays = document.getElementById('notification-days').value;

    // Simulate form data submission
    console.log({
        clientName,
        visaType,
        consulate,
        preferredDates,
        urgentClient,
        notificationDays
    });

    alert("Notification setup successfully for " + clientName);
});
