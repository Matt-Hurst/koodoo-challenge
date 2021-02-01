const accountTypeChecker = (accountBalanceHistory) => {

  // helper function to access monthly balance amounts
  const getBalance = (month) => {
    return month.account.balance.amount
  }
  try {
    if (accountBalanceHistory.length < 3) throw new Error('insufficient data, require at least three months of data');
    accountBalanceHistory.sort((a, b) => a.monthNumber - b.monthNumber);
    let typeA = true;
    let difference = getBalance(accountBalanceHistory[accountBalanceHistory.length - 1]) - getBalance(accountBalanceHistory[accountBalanceHistory.length - 2]);
    for (let i = accountBalanceHistory.length - 2; i > 0; i--) {
      if (getBalance(accountBalanceHistory[i]) - getBalance(accountBalanceHistory[i - 1]) !== difference) {
        typeA = false;
        break;
      }
    };
    return typeA ? "A" : "B";   
  } catch (error) {
    throw Error(error);
  }
};

module.exports = accountTypeChecker;

// Things to consider in your solution 🤔
// Does it solve the basic case?
// What other cases might need to be considered?
// TODO: parse data? Balance goes up by the same difference? 
// What unit tests might you write for this type of function?
