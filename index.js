const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //
  let result;

  // sort array based on month

  // work out difference from end of array e.g. diff = arr[arr.length - 1] - arr[arr.length - 2]

  // for loop from arr.length - 2 down, work out difference vs next in chain, 
    // if !== diff then set result to false and break loop.

  return result ? "A" : "B";
};

module.exports = accountTypeChecker;

// Things to consider in your solution 🤔
// Does it solve the basic case?
// What other cases might need to be considered?
// TODO: parse data? Balance goes up by the same difference? 
// What unit tests might you write for this type of function?
// We're not looking for a 100% full proof solution (which might not exist anyway depending on the use case).

// You should provide your solution by submitting your code in the form of a GitHub repository. 🤝