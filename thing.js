var button_content = document.querySelector('div1');

button_content.addEventListener('click', updateName);


function updateName() {
  var name = prompt('Enter a new name');
  button_content.textContent = 'Player 1: ' + name;
}