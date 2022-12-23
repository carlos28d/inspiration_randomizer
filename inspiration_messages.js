// Create 3 different arrays for components that will be added to the quote
const actions = ["run", "jump", "shoot", "point"];
const places = ["sky", "summit", "sun"];
const results = [
  "success",
  "peace",
  "strength",
  "what you've always waited for",
];

// Create function to get random components from each of the arrays then return message with each random component
function buildInspirationMessage(actionsArray, placesArray, resultsArray) {
  const randomAction =
    actionsArray[Math.floor(Math.random() * actionsArray.length)];
  const randomPlace =
    placesArray[Math.floor(Math.random() * placesArray.length)];
  const randomResult =
    resultsArray[Math.floor(Math.random() * resultsArray.length)];

  return `${randomAction} for the ${randomPlace} and you'll get ${randomResult}`;
}

// Test result of the function
const inspirationQuote2 = buildInspirationMessage(actions, places, results);
console.log(inspirationQuote2);
