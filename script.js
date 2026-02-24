// Get all needed DOM elements
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
const attendeeCountSpan = document.getElementById('attendeeCount');
const progressBar = document.getElementById('progressBar');
const greeting = document.getElementById('greeting');

// Track attendance
let count = 0;
const maxCount = 50;

form.addEventListener('submit', function (event) {
  event.preventDefault(); //Add a submit event listener to a form

  // Get the name a user typed in and the team they selected from a dropdown menu.
  const name = nameInput.value; 
  const team = teamSelect.value;
  const teamLabel = teamSelect.selectedOptions[0].text; //

  count++; // Create a counter that goes up by 1 every time someone submits the form.

  // Use the current count and a max goal to calculate a progress percentage.
  const percentage = Math.round((count / maxCount) * 100);

  // Combine a name and team into a welcome message
  const message = `Welcome, ${name} from ${teamLabel}!`;

  // Show the updated total count on the page
  attendeeCountSpan.textContent = count;

  // Change the width of a progress bar based on the calculated progress.
  progressBar.style.width = percentage + '%'; 


  // Update the correct team’s count on the page
  const teamCounter = document.getElementById(team + 'Count');
  teamCounter.textContent = Number(teamCounter.textContent) + 1;


  greeting.textContent = message; // Display a greeting message that includes the person’s name and the full team label
  greeting.classList.add('success-message');
  greeting.style.display = 'block';

  form.reset();  // Reset the form for the next check-in
});
