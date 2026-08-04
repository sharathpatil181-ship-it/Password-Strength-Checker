const passwordInput = document.getElementById("password-input");
const resultMessage = document.getElementById("result-message");

const SPECIAL_CHAR_REGEX = /[!@#$%^&*.<>?]/;

function checkPasswordStrength(password) {
  if (password.length < 8) {
    return "weak password: password must be at least 8 characters.";
  }

  if (!/\d/.test(password)) {
    return "weak password: password must contain at least one digit.";
  }

  if (!/[A-Z]/.test(password)) {
    return "weak password: password must contain at least one uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    return "weak password: password must contain at least one lowercase letter.";
  }

  if (!SPECIAL_CHAR_REGEX.test(password)) {
    return "weak password: password must contain at least one special character.";
  }

  return "strong: Your password is secure.";
}

function updateChecklist(password) {
  setRuleState("rule-length", password.length >= 8);
  setRuleState("rule-digit", /\d/.test(password));
  setRuleState("rule-upper", /[A-Z]/.test(password));
  setRuleState("rule-lower", /[a-z]/.test(password));
  setRuleState("rule-special", SPECIAL_CHAR_REGEX.test(password));
}

function setRuleState(elementId, isPassed) {
  document.getElementById(elementId).classList.toggle("passed", isPassed);
}

function render() {
  const password = passwordInput.value;

  updateChecklist(password);

  if (password.length === 0) {
    resultMessage.textContent = "Start typing to check your password";
    resultMessage.className = "";
    return;
  }

  const message = checkPasswordStrength(password);
  resultMessage.textContent = message;
  resultMessage.className = message.startsWith("weak") ? "weak" : "strong";
}

passwordInput.addEventListener("input", render);
