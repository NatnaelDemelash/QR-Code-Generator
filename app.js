const form = document.getElementById("generate-form");
const qrcode = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    alert("Please Enter a URL!");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
    }, 1000);
  }
};

const showSpinner = () => {
  const spinner = (document.getElementById("spinner").style.display = "block");
};
const hideSpinner = () => {
  const spinner = (document.getElementById("spinner").style.display = "none");
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
