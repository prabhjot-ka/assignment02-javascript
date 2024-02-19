// constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorBtn = document.querySelector('.custColor');
const randColorBtn = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);

    // Display student id
    myStudentId.textContent = 'Student ID: YourStudentID';

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

// function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;

    // Display student id
    myStudentId.textContent = 'Student ID: YourStudentID';

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

// function to generate options for select list
function addList() {
    const imgOptions = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg']; // Update with your actual image paths
    // Clear existing options
    imageSelect.innerHTML = '<option value="">Please choose...</option>';

    for (let i = 0; i < imgOptions.length; i++) {
        const option = document.createElement('option');
        option.value = imgOptions[i];
        option.textContent = `Image ${i + 1}`; // You can customize the text as needed
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage; // The value of selectedImage already includes the path 'img/'
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);
imageSelect.addEventListener('change', changeImage);
