document.getElementById('deposite-btn').addEventListener('click', function(){
    const getDepositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = getDepositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    const getTotalDeposite = document.getElementById('total-deposite'); 
    const previousDepositestring = getTotalDeposite.innerText;
    const previousDepositest = parseFloat(previousDepositestring);

    const currentDepositeAmount = previousDepositest + newDepositeAmount;

    getTotalDeposite.innerText = currentDepositeAmount;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    const currentBalance = previousTotalBalance + newDepositeAmount;

    totalBalance.innerText = currentBalance;
    
    getDepositeField.value = '';
});