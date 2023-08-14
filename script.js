const counterElements = document.querySelectorAll('.counter');
const counters = [
  { target: 10, increment: 10 / 8000 }, // For the +10 counter
  { target: 5, increment: 5 / 8000 },   // For the +5 counter
  { target: 4, increment: 4 / 8000 },   // For the +4 counter
  { target: 15, increment: 15 / 8000 }  // For the +15 counter
];

let currentNumbers = new Array(counters.length).fill(0);

function updateCounters(timestamp) {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = timestamp - startTimestamp;

  for (let i = 0; i < counters.length; i++) {
    currentNumbers[i] += counters[i].increment * progress;
    if (currentNumbers[i] > counters[i].target) {
      currentNumbers[i] = counters[i].target;
    }
    counterElements[i].textContent = Math.floor(currentNumbers[i]);
  }

  if (progress < 8000) { // Use 8000 milliseconds (8 seconds) as the completion time
    requestAnimationFrame(updateCounters);
  }
}

let startTimestamp = null;

// Observer configuration
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7, // Change this value to control when the animation starts relative to the section visibility
};

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the animation when the section comes into view
      startTimestamp = null; // Reset the startTimestamp to ensure smooth animation
      requestAnimationFrame(updateCounters);
      observer.unobserve(entry.target); // Unobserve the target to prevent starting the animation multiple times
    }
  });
}, options);

// Observe the target sections
const counterContainers = document.querySelectorAll('.counter-container');
counterContainers.forEach((container) => {
  observer.observe(container);
});
