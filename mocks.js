const typeA = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
];

const typeB = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 140 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
];

const typeMixedDatesTypeA = [
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
];

module.exports = {typeA, typeB, typeMixedDatesTypeA}