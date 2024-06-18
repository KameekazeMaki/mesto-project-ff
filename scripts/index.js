// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу
//делал записи для себя//

const content = document.querySelector('.content'); //создали переменную content - доступ к элементу с классом .content//
const placesList = content.querySelector('.places__list'); //создали переменную placesList - доступ к элементу с классом .places__list внутри уже найденного .content//
const cardTemplate = document.querySelector('#card-template').content; //создали переменную cardTemplate - доступ к элементу с ид. card-Template//

function addCards(card, deleteCard) {//функция которая 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;

  deleteButton.addEventListener('click', function(){
    deleteCard(cardElement);
  }); 
  
  return cardElement;
}

function deleteCard(cardElement){
  cardElement.remove();
}

initialCards.forEach(card => { 
  placesList.append(addCards(card, deleteCard));
});