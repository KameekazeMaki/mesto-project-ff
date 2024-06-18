//делал записи для себя

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;//создали переменную cardTemplate - доступ к элементу с айди #card-template

// @todo: DOM узлы
const content = document.querySelector('.content');//создали переменную content - доступ к элементу с классом .content
const placesList = content.querySelector('.places__list');//создали переменную placesList - доступ к элементу с классом .places__list внутри найденной content(index.js)

// @todo: Функция создания карточки
function addCards(card, deleteCard) {//объявляем функцию для приема данных карточки c параметрами card и deleteCard
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);//создали переменную cardElement - доступ к элементу с классом .card внутри найденной cardTemplate(index.js) и клонировали со всем содержимым с помощью метода cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image');//cоздали переменную cardImage - доступ к элементу с классом .card__image внутри найденной cardElement(index.js)
  const deleteButton = cardElement.querySelector('.card__delete-button');//создали переменную deleteButton - доступ к элементу с классом .card__delete-button внутри найденной cardElement(index.js)

  cardImage.src = card.link;//передали ссылку src через link(cards.js) на пикчу для отображения
  cardImage.alt = card.name;//передали альтернативное имя alt через name(cards.js) для отображения
  cardElement.querySelector('.card__title').textContent = card.name;//задали в .card__title текстовое содержимое карточки свойством textContent через name(cards.js)

  deleteButton.addEventListener('click', function(){//добавили реакцию на 'click' удаление карточки через универсальный метод отслеживания события addEventListener
    deleteCard(cardElement);//выполняем
  });
  
  return cardElement;//прекратили выполнение функции с помощью оператора return 
}

// @todo: Функция удаления карточки
function deleteCard(cardElement){//объявляем функцию удаления карточки, задаем параметр cardElement 
  cardElement.remove();//удаляем c помощью метода remove
}

// @todo: Вывести карточки на страницу
initialCards.forEach(card => {//c помощью метода forEach c параметром card вывели карточки initialCards(cards.js) на страницу
  placesList.append(addCards(card, deleteCard));//вставляем c помощью метода append
});