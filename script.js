const heading = document.getElementById('heading');
const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    heading.textContent = 'You clicked the button!'; // Change the heading text
});
