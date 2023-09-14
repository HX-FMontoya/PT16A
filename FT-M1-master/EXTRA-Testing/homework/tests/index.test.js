const { checkSeatStatus, getRowNumber, book } = require("../homework");

describe("Check function checkSeatStatus", () => {
  it("checkSeatStatus must be a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("checkSeatStatus must recived as fist parameter a string", () => {
    expect(() => checkSeatStatus(2)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });

  it("checkSeatStatus must recived as second parameter a number", () => {
    expect(() => checkSeatStatus("A", [])).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });
});

describe("Check function getRowNumber", () => {
  it("getRowNumber must return 0 if is called A", () => {
    expect(getRowNumber("A")).toBe(0);
  });
  it("getRowNumber must return 2 if is called C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
  it("Should be return true for A2", () => {
    expect(checkSeatStatus("A", 2)).toBe(true);
  });
});

describe("Check function book", () => {
  it("The seat B0 must be avaible", () => {
    expect(book("B", 0)).toBe("Seat in B0 successfully booked");
  });
  it("The seat C1 must be booked", () => {
    expect(book("C", 1)).toBe("Seat in C1 is already booked");
  });
});
