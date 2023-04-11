import './App.css';
import './WeekPlan.css';

const buttonClicked = (event) => {
  // console log the id of the button that was clicked
  console.log(event.target.id);

  // chamge the background color and text color
  event.target.style.backgroundColor = "#b4f03c";
  event.target.style.color = "#173c6e";

  //disable the button
  event.target.disabled = true;

  // give the id of the button that was clicked to the array buttonId
  let buttonId = [];
  buttonId.push(event.target.id);

  //display schedule chosen 
  const schedule = document.createElement("div");
  schedule.className = "schedule";
  schedule.id = "schedule";
  schedule.textContent = "Schedule chosen: " + buttonId;
  document.body.appendChild(schedule);

  // replace the onclick event with the function buttonUnclicked
  event.target.onclick = buttonUnclicked;
}

const buttonUnclicked = (event) => {
  // console log the id of the button that was clicked
  console.log(event.target.id);
  
  // chamge the background color and text color
  event.target.style.backgroundColor = "#173c6e";
  event.target.style.color = "#b4f03c";
}

export default buttonClicked;