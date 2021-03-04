function newButton(kind, type, customClass, buttonText, parentEl) {
  const button = document.createElement('button');
  button.setAttribute('type', type);

  button.textContent = buttonText;

  parentEl.appendChild(button);
  
  if (kind === 'text') {
    button.setAttribute('class', `pure-material-button-text ${customClass}`);
    return button;
  }

  if (kind === 'contained') {
    button.setAttribute('class', `pure-material-button-contained ${customClass}`);
    return button;
  }
}

export default newButton;