function cardInfo(el, researchesWrap) {
  const researchCard = document.createElement('li'),
    description = document.createElement('p'),
    info = document.createElement('span');

  // researchCard.setAttribute('id', el.id);

  researchesWrap.appendChild(researchCard);
  researchCard.appendChild(description);
  researchCard.appendChild(info);

  description.textContent = el.description;
}
export default cardInfo;