class Button {
  textButton(customClass, buttonText, parentEl) {
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

  containedButton(type, customClass, buttonText, parentEl) {
    const button = document.createElement('button');
    button.setAttribute('type', type);
    if (customClass) {
      button.setAttribute('class', 'pure-material-button-contained' + customClass);
    }
    button.setAttribute('class', 'pure-material-button-contained');
    button.textContent = buttonText;

    parentEl.appendChild(button);

    return button;
  }
}

const newButton = new Button();

export default newButton;

