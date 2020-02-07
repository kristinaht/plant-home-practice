import { User } from "./../src/age-calculator";

describe ("User", () => {
  test("should correctly create an user object with age paramether", () => {
    var user = new User(35);
    expect(user.age).toEqual(35);
  }); 
});