const layout = require("./data");

function checkSeatStatus(string, number) {
  // A,2
  // string -> A
  if (typeof string !== "string")
    throw new TypeError("First parameter is not a string");

  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");

  const position = getRowNumber(string);
  // row es una posicion del array, guarda un numero
  // row -> 0
  const row = layout[position];
  const column = row[number];
  return column.booked;
}

function getRowNumber(letter) {
  // letter -> "A"
  const numFixed = 65;
  return letter.toUpperCase().charCodeAt() - numFixed;
}

function book(string, number) {
  const result = checkSeatStatus(string, number);
  if (result) {
    return `Seat in ${string}${number} is already booked`;
  }
  const position = getRowNumber(string);
  layout[position][number].booked = true;

  return `Seat in ${string}${number} successfully booked`;
}

module.exports = { checkSeatStatus, getRowNumber, book };
