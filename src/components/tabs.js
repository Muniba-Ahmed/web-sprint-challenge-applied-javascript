import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //create elements
  const topicsContainer = document.createElement("div");
  // const tab1 = document.createElement('div');
  // const tab2 = document.createElement('div');
  // const tab3 = document.createElement('div');
  // const tab4 = document.createElement('div');
  // const tab5 = document.createElement('div');

  //add classes

  // add text and attributes

  //append to container div

  topics.forEach((item) => {
    const tab = document.createElement("div");
    tab.textContent = item;
    tab.classList.add("tab");
    topicsContainer.appendChild(tab);
  });

  //return
  return topicsContainer;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // console.log(topics);
  // const newTab = document.querySelector('selector')
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((response) => {
      // console.log(response.data.topics);

      // const newTabs = Tabs(response.data.topics);
      // const tabsElement = document.querySelector(selector);
      // tabsElement.appendChild(newTabs);
      document.querySelector(selector).appendChild(Tabs(response.data.topics));
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("its working!!! WOOOOOOOOHOOOOOOOOO!!!!!!");
    });
};

export { Tabs, tabsAppender };
