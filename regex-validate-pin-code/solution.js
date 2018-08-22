function validatePIN (pin) {
  let isValid = /^(?=(?:.{4}|.{6})$)[0-9_]*$/
  return isValid.test(pin);
}