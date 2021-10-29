import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};
getStoredFormData();

refs.textarea.addEventListener('input', throttle(onInput, 500));
refs.input.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getStoredFormData() {
  const storedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storedFormData) {
    refs.textarea.value = storedFormData.message;
    formData.message = storedFormData.message;
    refs.input.value = storedFormData.email;
    formData.email = storedFormData.email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
