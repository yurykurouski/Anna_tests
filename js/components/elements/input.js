class Input {
  standard(customClass, placeholder, nameId, parentEl) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    if (customClass) {
      label.setAttribute('class', 'pure-material-textfield-standard' + customClass);
    }
    label.setAttribute('class', 'pure-material-textfield-standard');

    input.setAttribute('placeholder', ' ')

    if (nameId) {
      input.setAttribute('name', nameId);
    }

    span.textContent = placeholder;

    parentEl.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
  }
}

const newInput = new Input();

export default newInput;