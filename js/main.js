// Stith Mod 1 : Assignment 1

//IPO Chart


console.group('Assignment 1 IPO chart');

console.group('input');
console.log('Input 1: total loan amount')
console.log('Input 2: interest rate')
console.log('Input 3:Length of loan in years  ')
console.log('Button: calculate monthly payment')
console.groupEnd()

console.group('processes');
console.log('get the input from user')
console.log('perform calculations ')
console.groupEnd()

console.group('output');
console.log('Display the result')
console.groupEnd()

console.groupEnd()

function mortgageCalculator() {
    //getting user input from the html document
    const input1 = document.getElementById("loanPrinciple").valueAsNumber
    const input2 = document.getElementById("interestRate").valueAsNumber
    const input3 = document.getElementById("loanLength").valueAsNumber
    // calculations
    /*
        M = P(  ( r(1 + r)^n )  /  ((1 + r)^n – 1)  )
        M: monthly payment
        P: principal loan amount
        r: interest rate (monthly and as a decimal)
        n: number of payments (monthly)
     */
    // setting variables for ease of use
    const loanLength = input3 * 12 ;
    const principalLoanAmt = input1;
    const interestRate = (input2/ 100) /12 ;

    const monthlypaymentcal =principalLoanAmt *((interestRate*(1 + interestRate)**loanLength)/((1 + interestRate)**loanLength - 1))

    //output
    document.getElementById('monthlyPayment').value = "$"+ monthlypaymentcal.toFixed(2);


}