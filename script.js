const heading = document.getElementById('heading');
const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    heading.textContent = 'Get Ready to Learn, How to Code!'; // Change the heading text
});
