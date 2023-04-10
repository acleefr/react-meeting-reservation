import logo from './logo.svg';
import './App.css';
import './WeekPlan.css';

function App() {
  // clear the console
  console.clear();
  // call the render function
  render();
  // console log App function execution
  console.log("App function executed");
  // return the string "Hello World"
  return ("");
}

function render() {
  // clear the page
  document.body.innerHTML = "";

  // give the page a title
  document.title = "My Week Plan";

  // call the renderWeekPlan function
  renderWeekPlan();

  //call the renderWeekHours function
  renderWeekHours();
}

const renderWeekPlan = () => {
  // create 7 vertical div elements, one for each day of the week, with unique class names, ids, and text content
  const monday = document.createElement("div");
  monday.className = "day";
  monday.id = "monday";
  monday.textContent = "Monday";

  const tuesday = document.createElement("div");
  tuesday.className = "day";
  tuesday.id = "tuesday";
  tuesday.textContent = "Tuesday";

  const wednesday = document.createElement("div");
  wednesday.className = "day";
  wednesday.id = "wednesday";
  wednesday.textContent = "Wednesday";

  const thursday = document.createElement("div");
  thursday.className = "day";
  thursday.id = "thursday";
  thursday.textContent = "Thursday";

  const friday = document.createElement("div");
  friday.className = "day";
  friday.id = "friday";
  friday.textContent = "Friday";

  const saturday = document.createElement("div");
  saturday.className = "day";
  saturday.id = "saturday";
  saturday.textContent = "Saturday";
  
  const sunday = document.createElement("div");
  sunday.className = "day";
  sunday.id = "sunday";
  sunday.textContent = "Sunday";

  // display the days of the week in the browser in another div element named "week"
  const week = document.createElement("div");
  week.className = "week";
  week.id = "week";
  week.appendChild(monday);
  week.appendChild(tuesday);
  week.appendChild(wednesday);
  week.appendChild(thursday);
  week.appendChild(friday);
  week.appendChild(saturday);
  week.appendChild(sunday);

  // append the week div element to the body of the page
  document.body.appendChild(week);
}

const renderWeekHours = () => {
  //add 10 buttons per day of the week, each with a unique class name "hour", id, and text content after the hour it represents
  const monday = document.getElementById("monday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `monday${i}`;
    button.textContent = `${i}pm`;
    monday.appendChild(button);
  }

  const tuesday = document.getElementById("tuesday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `tuesday${i}`;
    button.textContent = `${i}pm`;
    tuesday.appendChild(button);
  }

  const wednesday = document.getElementById("wednesday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `wednesday${i}`;
    button.textContent = `${i}pm`;
    wednesday.appendChild(button);
  }

  const thursday = document.getElementById("thursday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `thursday${i}`;
    button.textContent = `${i}pm`;
    thursday.appendChild(button);
  }

  const friday = document.getElementById("friday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `friday${i}`;
    button.textContent = `${i}pm`;
    friday.appendChild(button);
  }

  const saturday = document.getElementById("saturday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `saturday${i}`;
    button.textContent = `${i}pm`;
    saturday.appendChild(button);
  }

  const sunday = document.getElementById("sunday");
  for (let i = 1; i < 11; i++) {
    const button = document.createElement("button");
    button.className = "hour";
    button.id = `sunday${i}`;
    button.textContent = `${i}pm`;
    sunday.appendChild(button);
  }

  // when clicked, the button call the function buttonClicked
  const buttons = document.getElementsByClassName("hour");
  for (const element of buttons) {
    element.addEventListener("click", buttonClicked);
  }
}

const buttonClicked = (event) => {
  // console log the id of the button that was clicked
  console.log(event.target.id);

  // chamge the background color and text color
  event.target.style.backgroundColor = "#b4f03c";
  event.target.style.color = "#173c6e";
}

export default App;
