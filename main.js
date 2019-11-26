// DS ASGN MOVIE RATINGS (2D)

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'display-all') {
        outputEl.innerHTML = 'Display All';
    } else if (selection == 'display-genre') {
        outputEl.innerHTML = 'Display Genre';
    } else if (selection == 'display-date-range') {
        outputEl.innerHTML = 'Display Date Range';
    } else if (selection == 'display-random') {
        outputEl.innerHTML = 'Display Random';
    } else if (selection == 'ratings-adjustment') {
        outputEl.innerHTML = 'Ratings Adjustment';
    } else if (selection == 'rating-stats') {
        outputEl.innerHTML = 'Rating Stats';
    } else if (selection == 'add-movie') {
        outputEl.innerHTML = 'Add Movie';
    } else if (selection == 'top-movies-only') {
        outputEl.innerHTML = 'Top Movies Only';
    } else if (selection == 'remove-movie') {
        outputEl.innerHTML = 'Remove Movie';
    }
}