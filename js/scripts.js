// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorBtn = document.querySelector('.custColor');
const randColorBtn = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');

// Function to change background color from user input and add student id
function changeCustomColor() {
    // Parse user input to an integer
    const userInput = parseInt(customNumberInput.value);

    // Display student id
    myStudentId.textContent = 'Student ID: 200554143';

    // Change background color based on conditions
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to change background color from random number
function changeRandomColor() {
    // Generate a random number between 1 and 100
    const randomInput = Math.floor(Math.random() * 100) + 1;

    // Display student id
    myStudentId.textContent = 'Student ID: 200554143';

    // Change background color based on conditions
    if (randomInput < 0 || randomInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (randomInput >= 0 && randomInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (randomInput > 20 && randomInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (randomInput > 40 && randomInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (randomInput > 60 && randomInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (randomInput > 80 && randomInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to generate options for the select list
function addList() {
    // Array of image paths (update with your actual image paths)
    const imgOptions = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

    // Clear existing options
    imageSelect.innerHTML = '<option value="">Please choose...</option>';

    // Loop through image options and create select list options
    for (let i = 0; i < imgOptions.length; i++) {
        const option = document.createElement('option');
        option.value = imgOptions[i];
        option.textContent = `Image ${i + 1}`; // You can customize the text as needed
        imageSelect.appendChild(option);
    }
}

// Function to change the displayed image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage; // The value of selectedImage already includes the path 'img/'
}

// Event listeners for click events of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);
imageSelect.addEventListener('change', changeImage);
