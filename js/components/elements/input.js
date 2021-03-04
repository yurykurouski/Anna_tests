function newInput(customClass, placeholder, nameId, parentEl) {
  const label = document.createElement('label');

  label.innerHTML = `
    <input name=${nameId} placeholder=''>
    <span>${placeholder}</span>
  `

  parentEl.appendChild(label);

  label.setAttribute('class', `pure-material-textfield-standard ${customClass}`);

  return label;
}

export default newInput;