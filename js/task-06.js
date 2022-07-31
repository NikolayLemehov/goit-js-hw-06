const refInput = document.querySelector('#validation-input')
const CssClass = {
  VALID: 'valid',
  INVALID: 'invalid',
}

refInput.addEventListener('blur', handleBlurInput)

function handleBlurInput({target: {value}}) {
  if (value.length === Number(refInput.dataset.length)) {
    refInput.classList.add(CssClass.VALID);
    if (refInput.classList.contains(CssClass.INVALID)) refInput.classList.remove(CssClass.INVALID);
    return;
  }
  refInput.classList.add(CssClass.INVALID);
  if (refInput.classList.contains(CssClass.VALID)) refInput.classList.remove(CssClass.VALID);
}
