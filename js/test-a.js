var radioA = document.querySelector(".test__radio--a");
var radioB = document.querySelector(".test__radio--b");
var radioC = document.querySelector(".test__radio--c");
var testForm = document.querySelector(".test__form");

var testInfoA = document.querySelector(".test-info--a");
var testInfoB = document.querySelector(".test-info--b");
var testInfoC = document.querySelector(".test-info--c");
var testSubmit = document.querySelector(".test__submit");

var upload = function(data, onLoad, onError) {
  var URL = "index.html";
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    if (xhr.status === 200) {
      onLoad();
    } else {
      onError(xhr.status);
    }
  });
  xhr.addEventListener("error", function() {
    onError(
      "Запустите сервер для отправки формы. При загрузке данных произошла ошибка."
    );
  });
  xhr.addEventListener("timeout", function() {
    onError(
      "Извините, запрос превысил максимальное время " + xhr.timeout + " мс"
    );
  });
  xhr.timeout = 10000;
  xhr.open("GET", URL);
  xhr.send(data);
};

var onLoad = function() {
  window.location.href = "test-b.html";
};

var onError = function(errorMessage) {
  alert(errorMessage);
};

radioA.addEventListener("change", function() {
  if (radioA.checked) {
    testInfoA.classList.remove("display--none");
    testInfoB.classList.add("display--none");
    testInfoC.classList.add("display--none");
    testSubmit.classList.remove("display--none");
  }
});

radioB.addEventListener("change", function() {
  if (radioB.checked) {
    testInfoB.classList.remove("display--none");
    testInfoA.classList.add("display--none");
    testInfoC.classList.add("display--none");
    testSubmit.classList.remove("display--none");
  }
});

radioC.addEventListener("change", function() {
  if (radioC.checked) {
    testInfoC.classList.remove("display--none");
    testInfoB.classList.add("display--none");
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

if (radioC.checked) {
  testInfoC.classList.toggle("display--none");
  testSubmit.classList.remove("display--none");
}

testForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  upload(new FormData(testForm), onLoad, onError);
});
