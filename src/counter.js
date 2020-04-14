//Composition practice
//Smaller functions determine what an object can do, not what an object is!!

const canEat = function(creature) {
  const obj = {
    eat: function(food) { //eat: is a property and it stores a function! The function is a closure!
      return `The ${creature.name} eats the ${food}.`
    }
  }
  return obj;
}

const cat = canEat("cat"); //argument "cat" will be stored inside the eat function. Cat variable is an object that has the eat function as the property.

cat.eat("salmon");


//canEat doesn't care about the cat object. It can be used with a different object:

const salmon = canEat("salmon");
salmon.eat("insects");

const canSleep = function(creature){
  const obj = {
    sleep: function() {
      return `The ${creature.name} sleeps.`
    }
  }
  return obj;
}

//FUNCTION FACTORY:
const sleepingEatingCreature = function(name) {
  let state = {
    name
  }
  return {...state, ...canEat(state), ...canSleep(state)};
}