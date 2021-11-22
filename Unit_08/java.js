function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const movieContainer = document.getElementById('movie');
const url = 'http://www.omdbapi.com/?s=Blade+Runner&apikey=423e4210';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);
    var movie = data.Search;
        var p = createNode('p');
        var h5 = createNode('h5');
        var imdbID = createNode('imdbID');
        var img = createNode('img');
        var column = createNode('div');
        var card = createNode('div');
        var cardBody = createNode('div');
        var a = createNode('a');
        cardBody.classList.add("card-body");
        card.classList.add("card");
        card.classList.add("mt-3");
        a.classList.add("btn");
        a.classList.add("btn-primary");
        a.innerHTML = "About This Movie";
        a.href = "java2.html";
        column.classList.add("col-3");
        h5.innerHTML = `${movie.Title}`;
        h5.classList.add("card-title")
        p.innerHTML = `${movie.Year}`;
        p.classList.add("card-text")
        imdbID.innerHTML = `${movie.imdbID}`;
        img.src = movie.Poster;
        img.classList.add("card-img-top");

        append(card, img);
        append(cardBody, h5);
        append(cardBody, p);
        append(cardBody, a);
        append(card, cardBody);
        append(column, card);
        append(movieContainer, column);

  })
  .catch(function(error) {
    console.log(error);
  });
