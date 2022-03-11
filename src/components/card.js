import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //create elements

  const cardContainer = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const authorName = document.createElement("span");

  //add classes
  cardContainer.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //add text content and attributes
  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  //append
  cardContainer.appendChild(headline);
  cardContainer.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorPhoto);

  //add click listener

  cardContainer.addEventListener("click", (event) => {
    console.log(headline.textContent);
  });

  //return container div
  return cardContainer;
};

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

const cardAppender = (selector) => {
  const myCard = document.querySelector(selector);
  axios
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      const javascript = response.data.articles.javascript;
      javascript.forEach((elem) => {
        myCard.appendChild(Card(elem));
      });
      const bootstrap = response.data.articles.bootstrap;
      bootstrap.forEach((elem) => {
        myCard.appendChild(Card(elem));
      });
      const technology = response.data.articles.technology;
      technology.forEach((elem) => {
        myCard.appendChild(Card(elem));
      });
      const jquery = response.data.articles.jquery;
      jquery.forEach((elem) => {
        myCard.appendChild(Card(elem));
      });
      const node = response.data.articles.node;
      node.forEach((elem) => {
        myCard.appendChild(Card(elem));
      });
      // const technology = response.data.articles.technology;
      // technology.forEach((elem) => {
      //   myCard.appendChild(Card(elem));
      // });

      // document
      //   .querySelector(selector)
      //   .appendChild(Card(response.data.articles.bootstrap));
      // document
      //   .querySelector(selector)
      //   .appendChild(Card(response.data.articles.javascript));
      // document.querySelector(selector).appendChild(Card(response.data.articles.jquery))
      // document.querySelector(selector).appendChild(Card(response.data.articles.node))
      // document.querySelector(selector).appendChild(Card(response.data.articles.technology))
    })
    .catch((err) => {
      console.error(err);
    });
};

export { Card, cardAppender };
