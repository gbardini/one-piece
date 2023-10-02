const characters = document.querySelectorAll(".character");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    unselectButton();
    unselectCharacter();

    button.classList.add("selected");
    characters[index].classList.add("selected");
  });
});

function unselectButton() {
  const selectedButton = document.querySelector(".button.selected");
  selectedButton.classList.remove("selected");
}

function unselectCharacter() {
  const selectedCharacter = document.querySelector(".character.selected");
  selectedCharacter.classList.remove("selected");
}
