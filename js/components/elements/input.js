function newInput(customClass, placeholder, nameId, parentEl) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');

  input.setAttribute('placeholder', ' ')

  input.setAttribute('name', nameId);
  span.textContent = placeholder;

  parentEl.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);

  label.setAttribute('class', `pure-material-textfield-standard ${customClass}`);

  return label
}

export default newInput;