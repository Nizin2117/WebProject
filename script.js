const heading = document.getElementById('heading');
const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    heading.textContent = 'Hello, World!'; 
    heading.style.fontSize = '3em'; // Change the heading size
