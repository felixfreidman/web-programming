let organizationName = document.getElementById("organizationName");
let guestName = document.getElementById("guestName");
let cardName;
let cardPosition;
let jobPosition = document.getElementById("jobPosition");
let phoneSection = document.querySelector(
  ".toolbar-area_telephone-customization"
);
let phoneNumber = document.getElementById("phoneNumber");
let addPhoneButton = document.getElementById("addTelephoneNumber");
let removePhoneButton = document.getElementById("removeTelephoneNumber");
let addPhoneSection = document.querySelector(
  ".telephone-customization_addNumber"
);
let email = document.getElementById("email");
let address = document.getElementById("address");
let applyChange = document.getElementById("apply_button");
let resultCard = document.getElementById("resultCard");
let inputArray = document.querySelectorAll('input[type="text"]');
let displayMailInput = document.getElementById("displayToggleMail");
let displayAddressInput = document.getElementById("displayToggleAdr");
let positionArray = [
  "header",
  "name",
  "position",
  "number",
  "email",
  "address",
];

// Name customization
let alignLeftButtonName = document.getElementById("leftName");
let alignCenterButtonName = document.getElementById("centerName");
let alignRightButtonName = document.getElementById("rightName");
let smallFontName = document.getElementById("smallName");
let mediumFontName = document.getElementById("mediumName");
let bigFontName = document.getElementById("bigName");

// Job position customization
let alignLeftButtonPosition = document.getElementById("leftPosition");
let alignCenterButtonPosition = document.getElementById("centerPosition");
let alignRightButtonPosition = document.getElementById("rightPosition");
let smallFontPosition = document.getElementById("smallPosition");
let mediumFontPosition = document.getElementById("mediumPosition");
let bigFontPosition = document.getElementById("bigPosition");

// Colotfy elements
let blackColor = document.getElementById("black");
let blueColor = document.getElementById("blue");
let redColor = document.getElementById("red");
let greenColor = document.getElementById("green");
let yellowColor = document.getElementById("yellow");
let violetColor = document.getElementById("violet");
let darkColor = document.getElementById("dark");
let lightdarkColor = document.getElementById("lightgrey");
let darkgreyColor = document.getElementById("darkgrey");
let greyColor = document.getElementById("grey");
let lightgreyColor = document.getElementById("lightgrey");
let darkwhiteColor = document.getElementById("darkwhite");

// Function Section
let createNewElement = (position, value) => {
  let newElement;
  switch (position) {
    case "header":
      newElement = document.createElement("div");
      newElement.classList.add("header");
      newElement.innerHTML = `${value}`;
      return newElement;
    case "name":
      newElement = document.createElement("div");
      newElement.classList.add("name");
      newElement.innerHTML = `${value}`;
      return newElement;
    case "position":
      newElement = document.createElement("div");
      newElement.classList.add("position");
      newElement.innerHTML = `${value}`;
      return newElement;
    case "number":
      newElement = document.createElement("div");
      newElement.classList.add("number");
      newElement.innerHTML = `${value}`;
      return newElement;
    case "email":
      newElement = document.createElement("div");
      newElement.classList.add("email");
      newElement.innerHTML = `${value}`;
      return newElement;
    case "address":
      newElement = document.createElement("div");
      newElement.classList.add("address");
      newElement.innerHTML = `${value}`;
      return newElement;
    default:
      break;
  }
};

let displayInput = () => {
  if (!displayMailInput.checked) email.value = "";

  if (!displayAddressInput.checked) address.value = "";
};

addPhoneButton.addEventListener("click", () => {
  let newElem = document.createElement("input");
  newElem.id = "phoneNumber";
  newElem.placeholder = "89991234567";
  newElem.classList.add("newField");
  phoneSection.insertBefore(newElem, addPhoneSection);
  addPhoneButton.style.display = "none";
  removePhoneButton.style.display = "flex";
  document.querySelector(".button-label").textContent = "Убрать телефон";
});

removePhoneButton.addEventListener("click", () => {
  phoneSection.removeChild(document.getElementById("phoneNumber"));
  addPhoneButton.style.display = "flex";
  removePhoneButton.style.display = "none";
  document.querySelector(".button-label").textContent =
    "Добавить еще один телефон";
});

applyChange.addEventListener("click", () => {
  displayInput();
  for (let counter = 0; counter < positionArray.length; counter++) {
    while (!inputArray[counter].value) {
      counter++;
    }
    let newElem = createNewElement(
      positionArray[counter],
      inputArray[counter].value
    );
    newElem.id = `id: ${counter}`;
    resultCard.append(newElem);
    cardName = document.querySelector(".name");
    cardPosition = document.querySelector(".position");
  }
});

// font size and text align for name input
alignLeftButtonName.addEventListener("click", () => {
  cardName.classList.toggle("alignLeft");
  alignLeftButtonName.classList.toggle("grey");
});

alignCenterButtonName.addEventListener("click", () => {
  cardName.classList.toggle("alignRight");
  alignCenterButtonName.classList.toggle("grey");
});

alignRightButtonName.addEventListener("click", () => {
  cardName.classList.toggle("alignRight");
  alignRightButtonName.classList.toggle("grey");
});

smallFontName.addEventListener("click", () => {
  cardName.classList.toggle("smallFont");
  smallFontName.classList.toggle("grey");
});

mediumFontName.addEventListener("click", () => {
  cardName.classList.toggle("mediumFont");
  mediumFontName.classList.toggle("grey");
});

bigFontName.addEventListener("click", () => {
  cardName.classList.toggle("bigFont");
  bigFontName.classList.toggle("grey");
});

// font and align for job position
alignLeftButtonPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("alignLeft");
  alignLeftButtonPosition.classList.toggle("grey");
});

alignCenterButtonPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("alignRight");
  alignCenterButtonPosition.classList.toggle("grey");
});

alignRightButtonPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("alignRight");
  alignRightButtonPosition.classList.toggle("grey");
});

smallFontPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("smallFont");
  smallFontPosition.classList.toggle("grey");
});

mediumFontPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("mediumFont");
  mediumFontPosition.classList.toggle("grey");
});

bigFontPosition.addEventListener("click", () => {
  cardPosition.classList.toggle("bigFont");
  bigFontPosition.classList.toggle("grey");
});

// Change color Section

blackColor.addEventListener("click", () => {
  cardName.style.color = "#000";
});

blueColor.addEventListener("click", () => {
  cardName.style.color = "#2196f3";
});

redColor.addEventListener("click", () => {
  cardName.style.color = "#E83F56";
});

greenColor.addEventListener("click", () => {
  cardName.style.color = "#097A14";
});

yellowColor.addEventListener("click", () => {
  cardName.style.color = "#DCA40A";
});

violetColor.addEventListener("click", () => {
  cardName.style.color = "#DC0AD5";
});

darkColor.addEventListener("click", () => {
  cardPosition.style.color = "#474747";

});
lightdarkColor.addEventListener("click", () => {
  cardPosition.style.color = "#202020";
});
darkgreyColor.addEventListener("click", () => {
  cardPosition.style.color = "#636363";
});
greyColor.addEventListener("click", () => {
  cardPosition.style.color = "#9E9E9E";
});
lightgreyColor.addEventListener("click", () => {
  cardPosition.style.color = "#BBBBBB";
});
darkwhiteColor.addEventListener("click", () => {
  cardPosition.style.color = "#E3E3E3";
});
