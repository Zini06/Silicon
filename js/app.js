$(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".hamburger").addClass("whenscrolled");
      $("nav").addClass("stickyadd");
      $("nav").removeClass("stick");
    } else {
      $(".hamburger").removeClass("whenscrolled");
      $("nav").removeClass("stickyadd");
      $("nav").addClass("stick");
    }
  });

  $('.navbar-nav a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });
});

function validate(fieldToValidate) {
  const Field = document.querySelector("#" + fieldToValidate);
  const errorField = document.querySelector(".error");
  errorField.textContent = "";
  if (Field.value === "") {
    errorField.textContent =
      "Enter Valid Details (Name, Email and Subject is Mandatory)";
    return false;
  }
  if (fieldToValidate === "username" || fieldToValidate === "email") {
    if (Field.value.length < 6) {
      errorField.textContent =
        "Name/Email too short! Should have minimum 6 characters";
      return false;
    } else if (Field.value.includes(" ")) {
      errorField.textContent = `Name/Email cannot have space`;
      return false;
    }
  }

  return true;
}

function askToConfirm() {
  const isValidate =
    validate("username") && validate("email") && validate("subject");
  if (isValidate === false) {
    alert("Please verify details!");
    return isValidate;
  }
  const nameDom = document.querySelector("#username");
  const emailDom = document.querySelector("#email");
  const subjectDom = document.querySelector("#subject");
  const messageDom = document.querySelector("#message");
  alert(`Please validate:
  Name: ${nameDom.value}
  Email: ${emailDom.value}
  Subject: ${subjectDom.value}
  Message: ${messageDom.value}
`);
  console.log(`
  Name:${nameDom.value}
  Email: ${emailDom.value}
  Subject: ${subjectDom.value}
  Message: ${messageDom.value}`);
}
