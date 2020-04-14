// //function to store the state:
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const stateChanger = storeState(); //this creates a closure over the currentState variable in the outer function.

// // FUNCTION FACTORY, meaning we can easily create more specific functions that alter a plant's soil, water and light to varying degrees.

// const changeState = (prop) => {
//   return (value) => {
//     return (state) =>({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// //two functions created using function factory above. Can create more if needed. 
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);


// $(document).ready(function() {

//   //this function has side effects because we are using jQuery. Manipulating DOM is always a side effect.
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });










































//this is a function literal:.
//we are not mutating plant's state. this function literal returns a new object that represents plant's new state.
// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// const changeState = (state, prop, value) => ({
//     ...state,
//     [prop]: (state[prop] || 0) + value // square brackets [] used to pass the value of a variable into an object key or property.
// })


// const hydrate = changeState("water");
// const giveLight = changeState("light");

// feed(5)(plant); 

// const greenFood = changeState("soil")(10);
// const yuckyFood = changeState("soil")(-5);

// blueFood(plant);

