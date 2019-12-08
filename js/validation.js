var regForm = document.querySelector(".reg-form");
var nameInput = document.querySelector(".name__input");
var emailInput = document.querySelector(".email__input");
var passwordInput = document.querySelector(".password__input");
var aggreeInput = document.querySelector(".agree__input");
var aggreeCheckbox = document.querySelector(".agree__check-box");
var aggreeInfo = document.querySelector(".agree__info");

var onFocusInput = function(evt) {
  evt.target.style.borderColor = "#d3d3d3";
  evt.target.placeholder = "";
};

nameInput.addEventListener("invalid", function(evt) {
  nameInput.style.borderColor = "#ff0000";
  evt.preventDefault();
  if (nameInput.validity.valueMissing) {
    nameInput.placeholder.color = "#3b3b3b";
    nameInput.placeholder = "Введите своё имя";
  }
});

emailInput.addEventListener("invalid", function(evt) {
  emailInput.style.borderColor = "#ff0000";
  evt.preventDefault();
  if (emailInput.validity.valueMissing) {
    emailInput.placeholder = "Введите свой email";
  } else {
    emailInput.value = "";
    emailInput.placeholder = "Неверный формат email";
  }
});

passwordInput.addEventListener("invalid", function(evt) {
  passwordInput.style.borderColor = "#ff0000";
  evt.preventDefault();
  if (passwordInput.validity.valueMissing) {
    passwordInput.placeholder = "Придумайте новый пароль";
  } else if (passwordInput.validity.tooShort) {
    passwordInput.value = "";
    passwordInput.placeholder = "Пароль должен быть больше 8 символов";
  }
});

aggreeInput.addEventListener("invalid", function(evt) {
  evt.preventDefault();
});

aggreeInput.addEventListener("change", function() {
  if (!aggreeInput.checked) {
    aggreeCheckbox.style.borderColor = "#ff0000";
    aggreeInfo.style.color = "#b72020";
  } else {
    aggreeCheckbox.style.borderColor = "#7f7f7f";
    aggreeInfo.style.color = "#000";
  }
});

nameInput.addEventListener("focus", onFocusInput);
emailInput.addEventListener("focus", onFocusInput);
passwordInput.addEventListener("focus", onFocusInput);
