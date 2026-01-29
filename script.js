function updateCalendar() {
    const now = new Date(); // Get the current date
    const day = now.getDate(); // Get the current day of the month
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[now.getMonth()]; // Get the current month name

    // Update the HTML elements with the current day and month
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

// Call the function to update the calendar display
updateCalendar();