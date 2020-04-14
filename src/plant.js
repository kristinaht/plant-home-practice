
class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

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

const changeState = (prop) => {
  return (value) => {
    return (state) =>({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

feed(5)(plant); 

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

blueFood(plant);