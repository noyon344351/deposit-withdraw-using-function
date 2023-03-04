document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDeposit=getInputFieldById('deposit-field');
    const previousDepositTotal=getElementValueById('total-deposit');
    const newDepositTotal=newDeposit+previousDepositTotal;
    //set total deposit value
    setTextElementValueById('total-deposit',newDepositTotal); 

    //calculate total balance

    const previousTotalBalance=getElementValueById('total-balance');
    const totalBalance=previousTotalBalance+newDeposit;

    //set total balance
    setTextElementValueById('total-balance',totalBalance);

})