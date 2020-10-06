const form1 = document.getElementById("form1");
const onChangeInput = (Input) => {
  var pattern;
  if (Input.name === "userName" && Input.value !== "") {
    pattern = /\S/;
  } else if (Input.name === "email" && Input.value !== "") {
    pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
  } else {
    pattern = /\d{5}/;
  }
  var res = pattern.test(Input.value);

  if (!res) {
    Input.className = "invalid";
  } // установка CSS класса
  else {
    Input.className = "valid";
  }
};

function onsubmitHandler(event) {
  event.preventDefault();
  console.log(form1);
  for (var i = 0; i < form1.elements.length; ++i) {
    if (
      form1.elements[i].type === "text" &&
      form1.elements[i].className === "valid"
    ) {
      var invalid = false;
    } else {
      invalid = true;
    }
  }

  if (invalid) {
    alert("Допущены ошибки при заполнении формы.");
    event.preventDefault();
    return false; // отмена отправки формы.
  }
}
