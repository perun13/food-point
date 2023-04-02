const ShawermaCounterBtnPlus = document.getElementById("plus-shaverma");
const ShawermaCounterBtnMinus = document.getElementById("minus-shaverma");
const MainValue = document.getElementById("main-value");


let countShawerma = 0;
let mainPrice = 0

const counterValueShawerma = document.getElementById("counter-value-shawerma");
ShawermaCounterBtnPlus.addEventListener("click", () => {
  countShawerma++;
  mainPrice +=75;
  MainValue.textContent = mainPrice;

  counterValueShawerma.textContent = countShawerma;
});


ShawermaCounterBtnMinus.addEventListener("click", () => {
  countShawerma--;
  counterValueShawerma.textContent = countShawerma;

  mainPrice -=75;
  MainValue.textContent = mainPrice;

});

////////////////////////////////////////////////////////////

let countBurger = 0;
const counterValueBurger = document.getElementById("counter-value-burger");
document.querySelector("#minus-burger").addEventListener("click", () => {
  countBurger--;
  mainPrice -=90;
  MainValue.textContent = mainPrice;

  counterValueBurger.textContent = countBurger;
});


document.querySelector("#plus-burger").addEventListener("click", () => {
  countBurger++;
  counterValueBurger.textContent = countBurger;

  mainPrice +=90;
  MainValue.textContent = mainPrice;

});
////////////////////////////////////////////////////////////

let countHotDog = 0;

const counterValueHotDog = document.getElementById("counter-value-hotdog");
document.querySelector("#minus-hotdog").addEventListener("click", () => {
  countHotDog--;
  mainPrice -=65;
  MainValue.textContent = mainPrice;
  counterValueHotDog.textContent = countHotDog;
});


document.querySelector("#plus-hotdog").addEventListener("click", () => {
  countHotDog++;
  counterValueHotDog.textContent = countHotDog;
  mainPrice +=65;
  MainValue.textContent = mainPrice;
});


////////////////////////////////////////////////////////////

let countSendwich = 0;

const counterValueSendwich = document.getElementById("counter-value-sendwich");
document.querySelector("#minus-sendwich").addEventListener("click", () => {
  countSendwich--;
  mainPrice -=65;
  MainValue.textContent = mainPrice;
  counterValueSendwich.textContent = countSendwich;
});


document.querySelector("#plus-sendwich").addEventListener("click", () => {
  countSendwich++;
  counterValueSendwich.textContent = countSendwich;
  mainPrice +=65;
  MainValue.textContent = mainPrice;
});

///////////////////////////////////////////////////////////

let countPotatoBig = 0;

const counterValuePotatoBig = document.getElementById("counter-value-potato-big");
document.querySelector("#minus-potato-big").addEventListener("click", () => {
  countPotatoBig--;
  mainPrice -=45;
  MainValue.textContent = mainPrice;
  counterValuePotatoBig.textContent = countPotatoBig;
});


document.querySelector("#plus-potato-big").addEventListener("click", () => {
  countPotatoBig++;
  counterValuePotatoBig.textContent = countPotatoBig;
  mainPrice +=45;
  MainValue.textContent = mainPrice;
});

///////////////////////////////////////////////////////////

let countPotatoSmall = 0;

const counterValuePotatoSmall = document.getElementById("counter-value-potato-small");
document.querySelector("#minus-potato-small").addEventListener("click", () => {
  countPotatoSmall--;
  mainPrice -=40;
  MainValue.textContent = mainPrice;
  counterValuePotatoSmall.textContent = countPotatoSmall;
});


document.querySelector("#plus-potato-small").addEventListener("click", () => {
  countPotatoSmall++;
  counterValuePotatoSmall.textContent = countPotatoSmall;
  mainPrice +=40;
  MainValue.textContent = mainPrice;
});

///////////////////////////////////////////////////////////

let countNuggetsBig = 0;

const counterValueNuggetsBig = document.getElementById("counter-value-nuggets-big");
document.querySelector("#minus-nuggets-big").addEventListener("click", () => {
  countNuggetsBig--;
  mainPrice -=65;
  MainValue.textContent = mainPrice;
  counterValueNuggetsBig.textContent = countNuggetsBig;
});


document.querySelector("#plus-nuggets-big").addEventListener("click", () => {
  countNuggetsBig++;
  counterValueNuggetsBig.textContent = countNuggetsBig;
  mainPrice +=65;
  MainValue.textContent = mainPrice;
});

///////////////////////////////////////////////////////////

let countNuggetsSmall = 0;

const counterValueNuggetsSmall = document.getElementById("counter-value-nuggets-small");
document.querySelector("#minus-nuggets-small").addEventListener("click", () => {
  countNuggetsSmall--;
  mainPrice -=40;
  MainValue.textContent = mainPrice;
  counterValueNuggetsSmall.textContent = countNuggetsSmall;
});


document.querySelector("#plus-nuggets-small").addEventListener("click", () => {
  countNuggetsSmall++;
  mainPrice +=40;
  MainValue.textContent = mainPrice;
  counterValueNuggetsSmall.textContent = countNuggetsSmall;
});