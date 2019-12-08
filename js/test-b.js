var radioA = document.querySelector(".test__radio--a");
var radioB = document.querySelector(".test__radio--b");

var testInfoA = document.querySelector(".test-info--a");
var testInfoB = document.querySelector(".test-info--b");
var testSubmit = document.querySelector(".test__submit");

radioA.addEventListener("change", function(evt) {
  if (radioA.checked) {
    testInfoA.classList.remove("display--none");
    testInfoB.classList.add("display--none");
    testSubmit.classList.remove("display--none");
  }
});

radioB.addEventListener("change", function() {
  if (radioB.checked) {
    testInfoB.classList.remove("display--none");
    testInfoA.classList.add("display--none");
    testSubmit.classList.remove("display--none");
  }
});

radioA.addEventListener("focus", function() {
  testInfoA.classList.remove("display--none");
});

radioA.addEventListener("blur", function() {
  testInfoA.classList.add("display--none");
});

if (radioA.checked) {
  testInfoA.classList.toggle("display--none");
  testSubmit.classList.remove("display--none");
}

if (radioB.checked) {
  testInfoB.classList.toggle("display--none");
  testSubmit.classList.remove("display--none");
}
