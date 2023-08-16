document.getElementById('withdraw-btn').addEventListener('click', function(){
    const getWithdrawElement = document.getElementById('withdraw-field');
    const withdrawAmountString = getWithdrawElement.value;
    const WithdrawAmount = parseFloat(withdrawAmountString);

    getWithdrawElement.value = '';

    if(isNaN(WithdrawAmount)){
        alert('Please provide a valid amount');
        return;
    }

    const previousTotalWithdrawElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);


    const getTotalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = getTotalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    

    if(WithdrawAmount > previousTotalBalance){
        alert('NO balance');
        return;
    }

    const currentWithdraw = previousTotalWithdraw + WithdrawAmount;
    previousTotalWithdrawElement.innerText = currentWithdraw;

    const currentBalance = previousTotalBalance - WithdrawAmount;
    getTotalBalanceElement.innerText = currentBalance;
});