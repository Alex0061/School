function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const numberOfUsers = 12;
  const allCards = document.getElementById('allAuthorCards');
  const url = 'https://randomuser.me/api/?results=' + numberOfUsers;
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        // console.log(data);
      let authors = data.results;

      return authors.map(function(author) {
        let cardText = createNode('p');
        let cardBody = createNode('div');
        let cardImage = createNode('img');
        let card = createNode('div');
        let cardContainer = createNode('div');
        let cardTitle = createNode('h5');


        cardText.classList.add("card-text");
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardImage.classList.add("card-img-top");
        card.classList.add("card")
        cardContainer.classList.add("p-3");
        cardContainer.classList.add("col-md-2");


        cardImage.src = author.picture.large;
        cardTitle.innerHTML = `${author.name.first} ${author.name.last}`;
        cardText.innerHTML = `${author.location.city}, ${author.phone}`;

        append(cardBody, cardTitle);
        append(cardBody, cardText);
        append(card, cardImage);
        append(card, cardBody);
        append(cardContainer, card);
        append(allCards, cardContainer);
      })
    })
    .catch(function(error) {
      console.log(error);
    });
