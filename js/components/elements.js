export function textButton(customClass, buttonText, parentEl) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  if (customClass) {
    button.setAttribute('class', 'pure-material-button-text' + customClass);
  }
  button.setAttribute('class', 'pure-material-button-text');
  button.textContent = buttonText;

  parentEl.appendChild(button);

  return button;
}