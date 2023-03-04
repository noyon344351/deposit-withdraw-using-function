document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdraw=getInputFieldById('withdraw-field');
    const previousTotalWithdraw=getElementValueById('total-withdraw');
    const totalWithdraw=previousTotalWithdraw+newWithdraw;

    setTextElementValueById('total-withdraw',totalWithdraw);

    const previousTotalBalance=getElementValueById('total-balance');
    const totalBalance=previousTotalBalance-newWithdraw;

    setTextElementValueById('total-balance',totalBalance);
})