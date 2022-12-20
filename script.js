/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let billInput = document.querySelector("#billTotalInput");
let tipInput = document.querySelector("#tipInput");
let noOfPeopleDiv = document.querySelector("#numberOfPeople");
let totalPerPerson = document.querySelector("#perPersonTotal");

// Get number of people from number of people div
let noOfPeople = parseFloat(noOfPeopleDiv.innerText);



// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  let ans = 0;

  let billTotal = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipInput.value) / 100;

  // get the total tip amount
  // calculate the total (tip amount + bill)
  // calculate the per person total (total divided by number of people)
  ans = (billTotal + (billTotal*tip)) / noOfPeople;
  
  // update the perPersonTotal on DOM & show it to user
  totalPerPerson.innerText = `$${ans.toFixed(2)}`;

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  noOfPeople++;

  // update the DOM with the new number of people
  noOfPeopleDiv.innerText = noOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(noOfPeople <= 1){
    // throw("Hey! you cannot go less than 1 person");
    alert("Hey! you cannot go less than 1 person");

    return;

  }else{
    // decrement the amount of people
    noOfPeople--;

    // update the DOM with the new number of people
    noOfPeopleDiv.innerText = noOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  
}