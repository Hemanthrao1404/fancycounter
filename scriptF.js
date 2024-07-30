const increbtnE1 = document.querySelector('.counter__button--incre');
increbtnE1.addEventListener('click', function() {
  let countElement = document.querySelector('.value');
  
  let count = parseInt(countElement.innerHTML);
  
  // Increment the count
  count += 1;
  
  // Update the value in the DOM
  countElement.innerHTML = count;
});

// Select the decrement button and add click event listener
const decrementBtnE1 = document.querySelector('.counter__button--decre');
decrementBtnE1.addEventListener('click', function() {
  // Select the value element
  let countElement = document.querySelector('.value');
  
  // Get the current count value as a number
  let count = parseInt(countElement.innerHTML, 10);
  
  // Decrement the count
  count -= 1;
  
  // Update the value in the DOM
  countElement.innerHTML = count;
});

const Reset = document.querySelector('.resetbtn');
Reset.addEventListener('click', function() {
  // Select the value element
  let countElement = document.querySelector('.value');
  
  count = 0;
  
  // Update the value in the DOM
  countElement.innerHTML = count;
});
