const increbtnE1 = document.querySelector('.counter__button--incre');
increbtnE1.addEventListener('click', function() {
  let countElement = document.querySelector('.value');
  
  let count = parseInt(countElement.innerHTML);
  
  count += 1;
  
  countElement.innerHTML = count;
});

const decrementBtnE1 = document.querySelector('.counter__button--decre');
decrementBtnE1.addEventListener('click', function() {
  let countElement = document.querySelector('.value');
  
  let count = parseInt(countElement.innerHTML, 10);
  
  count -= 1;
  
  countElement.innerHTML = count;
});

const Reset = document.querySelector('.resetbtn');
Reset.addEventListener('click', function() {
  let countElement = document.querySelector('.value');
  
  count = 0;
  
  
  countElement.innerHTML = count;
});
