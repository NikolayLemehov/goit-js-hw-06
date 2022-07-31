const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(evt) {
  evt.preventDefault();

  const {email, password} = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  }

  console.log(formData)
  formRef.reset();
}
