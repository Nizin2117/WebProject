const heading = document.getElementById('heading');
const button = document.getElementById('changeTextButton');

button.addEventListener('click', function() {
    heading.textContent = 'Hello, World!'; 
    heading.style.fontSize = '3em'; // Change the heading size
    heading.style.color = '#ff6347'; // Change the heading color to red
});
