document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const textBtn = document.getElementById('text-btn');
    const colorBtn = document.getElementById('color-btn');
    const elementBtn = document.getElementById('element-btn');
    const dynamicText = document.getElementById('dynamic-text');
    const colorDisplay = document.getElementById('color-display');
    const specialSection = document.getElementById('special-section');
    const mainTitle = document.getElementById('main-title');

    // Text options for dynamic changes
    const textOptions = [
        "Stellah Otunga made this!",
        "DOM Manipulation is fun!",
        "You can create magic!",
        "Web development rocks!",
        "I love my Website!"
    ];

    // Color options
    const colors = ['#ff9ff3', '#feca57', '#1dd1a1', '#54a0ff', '#8a2be2'];
    let colorIndex = 0;

    // 1. Change text content dynamically
    textBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * textOptions.length);
        dynamicText.textContent = textOptions[randomIndex];
        
        // Add temporary animation
        dynamicText.classList.add('text-pop');
        setTimeout(() => {
            dynamicText.classList.remove('text-pop');
        }, 500);
    });

    // 2. Modify CSS styles via JavaScript
    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        colorDisplay.style.color = colors[colorIndex];
        
        // Toggle animation class
        colorDisplay.classList.toggle('color-change');
        
        // Change button text
        const isAnimating = colorDisplay.classList.contains('color-change');
        colorBtn.innerHTML = isAnimating 
            ? '<i class="fas fa-palette"></i> Stop Animation' 
            : '<i class="fas fa-palette"></i> Toggle Colors';
    });

    // 3. Add/remove element when button is clicked
    elementBtn.addEventListener('click', function() {
        specialSection.classList.toggle('hidden');
        
        // Change button text based on state
        const isHidden = specialSection.classList.contains('hidden');
        elementBtn.innerHTML = isHidden 
            ? '<i class="fas fa-plus-circle"></i> Show Element' 
            : '<i class="fas fa-minus-circle"></i> Hide Element';
    });

    // Bonus: Interactive title
    mainTitle.addEventListener('mouseover', function() {
        this.style.color = '#8a2be2';
        this.style.textShadow = '0 0 10px rgba(138, 43, 226, 0.7)';
    });

    mainTitle.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.textShadow = '';
    });
});