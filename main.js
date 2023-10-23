const form = document.getElementById("form-validation");
const fieldA = document.getElementById("fieldA");
const fieldB = document.getElementById("fieldB");
const successMessageContainter = document.querySelector(".success-message");
const negativeMessageContainer = document.querySelector(".negative-message");

/* Função para validar os campos */
function validField() {
  return Number(fieldB.value) > Number(fieldA.value);
}

/* Adiciona o evento de submit ao formulário */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const successMessage = `The value of the field <b>B: ${fieldB.value}</b> is greater than field <b>A: ${fieldA.value}</b>`;

  /* Se a validação for verdadeira, exibe a mensagem positiva e oculta a negativa */
  if (validField()) {
    successMessageContainter.innerHTML = successMessage;
    successMessageContainter.style.display = "block";
    negativeMessageContainer.style.display = "none";
    fieldA.value = ``;
    fieldB.value = ``;
  } else {
    /* Se a validação for falsa, oculta a mensagem positiva e exibe a negativa */
    successMessageContainter.style.display = "none";
    negativeMessageContainer.style.display = "block";
  }
});
