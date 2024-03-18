function getDaysInMonth(month, year) {
    // List of months with 31 days
    const thirtyOneDaysMonths = [1, 3, 5, 7, 8, 10, 12];

    // Check if the month is in the list of months with 31 days
    if (thirtyOneDaysMonths.includes(month)) {
        return 31;
    } else if (month === 2) { // February
        // Check if it's a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; // Leap year, February has 29 days
        } else {
            return 28; // Regular year, February has 28 days
        }
    } else {
        return 30; // All other months have 30 days
    }
}

