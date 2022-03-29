// calculator.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

//const { should } = require("chai");
//const { cli } = require("cypress");

context('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  })

  //Button Checks + Basic Checks + Weird Input
  it('display should be blank', () => {
      cy.get('#display').should('have.value', '');
  });

  it('display shoudld be blank if = is clicked but display is empty', () => {
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '');
  });

  it('display should show Err if +-= is clicked', () => {
      cy.get('#add').click();
      cy.get('#minus').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'Err');
  });

  it('should be be able to evaluate that an entered value followed by the equal sign should return the same value', () => {
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      let val = cy.get('#display').value;
      cy.get('#eq').click();
      let val2 = cy.get('#display').value;
      val == val2;
  });

  it('should respond to all number button clicks', () => {
      cy.get('#one').click();
      cy.get('#two').click();
      cy.get('#three').click();
      cy.get('#four').click();
      cy.get('#five').click();
      cy.get('#six').click();
      cy.get('#seven').click();
      cy.get('#eight').click();
      cy.get('#nine').click();
      cy.get('#zero').click();
      cy.get('#display').should('have.value', '1234567890');
  });

  it('should respond to all operation button clicks', () => {
      cy.get('#times').click();
      cy.get('#div').click();
      cy.get('#add').click();
      cy.get('#minus').click();
      cy.get('#display').should('have.value', '*/+-');
  });

  it('should display 0 when finding the sqrt of an empty display', () => {
      cy.get('#sq').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should display 0 for finding the % of an empty display', () => {
      cy.get('#percent').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should give Err for any operation done on Err', () => {
      cy.get('#one').click();
      cy.get('#add').click();
      cy.get('#minus').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'Err');
  });

  //Clear
    it('should be blank if after values are entered C is clicked', () => {
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');
  });

  it('should be blank if after getting NaN C is clicked', () => {
      cy.get('#nine').click();
      cy.get('#zero').click();
      cy.get('#div').click();
      cy.get('#one').click();
      cy.get('#eight').click();
      cy.get('#zero').click();
      cy.get('#percent').click();
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');
  });

  it('should be blank after getting a positive deminal value and C is clicked', () => {
      cy.get('#three').click();
      cy.get('#eight').click();
      cy.get('#sq').click();
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');
  });

  it('should be blank after getting a negative deminal value and C is clicked', () => {
      cy.get('#three').click();
      cy.get('#eight').click();
      cy.get('#sq').click();
      cy.get('#pm').click();
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');
  });

  it('should clear no matter how many times clear is pressed', () => {
      cy.get('#two').click();
      cy.get('#add').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#clear').click();
      cy.get('#four').click();
      cy.get('#sq').click();
      cy.get('#clear').click();
      cy.get('#zero').click();
      cy.get('#clear').click();
      cy.get('#clear').click();
      cy.get('#five').click();
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');
  });

  it('should display blank after enetering a large positive number then click C', () => {
      cy.get('#one').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');         
  });

  it('should display blank after enetering a large negative number then click C', () => {
      cy.get('#minus').click();
      cy.get('#one').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#clear').click();
      cy.get('#display').should('have.value', '');         
  });

  //Addition Tests
  it('should be able to add two positive numbers', () => {
      cy.get('#six').click();
      cy.get('#add').click();
      cy.get('#seven').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '13');
  });

  it('should be be able to add two zeros', () => {
      cy.get('#zero').click();
      cy.get('#add').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should be able to add a negative number to zero', () => {
      cy.get('#six').click();
      cy.get('#pm').click();
      cy.get('#Mplus').click();
      cy.get('#clear').click();
      cy.get('#zero').click();
      cy.get('#add').click();
      cy.get('#MRC').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-6');
  });

  //kmt
  it('should be able able to add two negative numbers ', () => {
      cy.get('#minus').click();
      cy.get('#eight').click();
      cy.get('#two').click();
      cy.get('#add').click();
      cy.get('#minus').click();
      cy.get('#four');
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-86');
  });

  it('should be able to add a negative and a positive number', () => {
      cy.get('#minus').click();
      cy.get('#eight').click();
      cy.get('#two').click();
      cy.get('#add').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-78');
  });

  it('should be able to add a negative and a positive number (v2)', () => {
      cy.get('#eight').click();
      cy.get('#two').click();
      cy.get('#add').click();
      cy.get('#minus').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '78');
  });

  it('should be able to add two large positve numbers', () => {
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#add').click();
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1200000000');     
  });

  it('should be able to add two large numbers v2', () => {
      for (let z=0; z<9; z++){
            cy.get('#nine').click();
        }
      cy.get('#add').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1000000000');
  });

  it('should be able to add a number to a previous answer', () => {
      cy.get('#one').click();
      cy.get('#two').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#times').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#add').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '2402');
  });

  it('should be able to add a number to a previous answer v2', () => {
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#add').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '3.5');
  });

   it('should be able to evaluate a double addition sign', () => {
       cy.get('#one').click();
       cy.get('#add').click();
       cy.get('#add').click();
       cy.get('#four').click();
       cy.get('#eq').click();
       cy.get('#display').should('have.value', '5');
   });

  //Subtraction Tests
  it('should be able to subtract two positive numbers', () => {
      cy.get('#one').click();
      cy.get('#minus').click();
      cy.get('#three').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-2');
  });

  it('should be able to subtract a zero from a zero', () => {
      cy.get('#zero').click();
      cy.get('#minus').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should be able to subtract two negative numbers', () => {
      cy.get('#minus').click();
      cy.get('#two').click();
      cy.get('#three').click();
      cy.get('#minus').click();
      cy.get('#minus').click();
      cy.get('#five').click();
      cy.get('#eq').click()
      cy.get('#display').should('have.value', '-28');
  });

  it('should be able to subtract a positive from a negative number', () => {
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#eq').click()
      cy.get('#display').should('have.value', '-2');
  });

  it('should be able to subtract a negative from a positive number', () => {
      cy.get('#one').click();
      cy.get('#minus').click();
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#eq').click()
      cy.get('#display').should('have.value', '-2');
  });

  it('should be able to subtract zero from a negative number', () => {
      cy.get('#minus').click();
      cy.get('#nine').click();
      cy.get('#zero').click();
      cy.get('#minus').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-90');
  });

  it('should be able to subtract two large positve numbers', () => {
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#minus').click();
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-600000000');     
  });

  it('should be able to subtract two large numbers v2', () => {
      for (let z=0; z<9; z++){
            cy.get('#nine').click();
        }
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '999999998');
  });

  it('should be able to subtract a number from a previous answer', () => {
      cy.get('#one').click();
      cy.get('#two').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#times').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#minus').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '2398');
  });

  it('should be able to subtract a number from a previous answer v2', () => {
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1.5');
  });

  it('should be able to subtract a decimal number from an integer', () => {
      cy.get('#three').click();
      cy.get('#eight').click();
      cy.get('#zero').click();
      cy.get('#one').click();
      cy.get('#minus').click();
      cy.get('#seven').click();
      cy.get('#div').click();
      cy.get('#eight').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '3800.125');
  });

  it('should be able to subtract an interger from a decimal number', () => {
      cy.get('#seven').click();
      cy.get('#div').click();
      cy.get('#eight').click();
      cy.get('#eq').click();
      cy.get('#minus').click();
      cy.get('#three').click();
      cy.get('#eight').click();
      cy.get('#zero').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-3800.125');
  });

  it('should be able to subtract a decimal number from a decimal number', () => {
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#minus').click();
      cy.get('#five').click();
      cy.get('#div').click();
      cy.get('#eight').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-0.375');
  });

  //Division Tests
  it('should be able to divide two positive numbers', () => {
      cy.get('#nine').click();
      cy.get('#div').click();
      cy.get('#five').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1.8');
  });

  it('should be able to evaluate 0/0', () => {
      cy.get('#zero').click();
      cy.get('#div').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'NaN');
  });

  it('should be able to divide a positive by a negative number', () => {
      cy.get('#one').click();
      cy.get('#nine').click();
      cy.get('#div').click();
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-19');
  });

  it('should be able to divide a negative by a positive number', () => {
      cy.get('#minus').click();
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#one').click();
      cy.get('#nine').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-0.05263157894736842');
  });

  it('should be able to divide two negative numbers', () => {
      cy.get('#minus').click();  
      cy.get('#four').click();
      cy.get('#five').click();
      cy.get('#div').click();
      cy.get('#minus').click();
      cy.get('#five').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '9');
  });

  it('should be able evaluate a number divided by 0', () => {
      cy.get('#two').click();
      cy.get('#two').click();
      cy.get('#div').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'Infinity');
  });

  it('should be able evaluate 0 divided by a number', () => {
      cy.get('#zero').click();
      cy.get('#div').click();
      cy.get('#two').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should be able to divide two large positve numbers', () => {
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#div').click();
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '3');     
  });

  it('should be able to divide two large negative numbers', () => {
      cy.get('#minus').click();
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#div').click();
      cy.get('#minus').click();
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '3');     
  });

  it('should be able to divide a previous answer by a number', () => {
      cy.get('#one').click();
      cy.get('#two').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#times').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#div').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1200');
  });

  it('should be able to divide a previous answer by a number v2', () => {
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#div').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '2.5');
  });

  //Multiplication Tests
  it('should be able to multiply two positive numbers', () => {
      cy.get('#four').click();
      cy.get('#eight').click();
      cy.get('#times').click();
      cy.get('#seven').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '336');
  });

  it('should be able to multiply two zeros', () => {
      cy.get('#zero').click();
      cy.get('#times').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '0');
  });

  it('should be able to evaluate a number multiplied by zero', () => {
      cy.get('#seven').click();
      cy.get('#seven').click();
      for (let z=0; z<25; z++){
            cy.get('#zero').click();
        }
      cy.get('#times').click();
      cy.get('#six').click();
      cy.get('#six').click();
      for (let z=0; z<30; z++){
            cy.get("#zero").click();
        }
      cy.get('#times').click();
      cy.get('#zero').click();
      cy.get('#eq').click()
      cy.get('#display').should('have.value', '0');
  });

  it('should be able to multiply a negative number by a positive number', () => {
      cy.get('#five').click();
      cy.get('#two').click();
      cy.get('#zero').click();
      cy.get('#five').click();
      cy.get('#four').click();
      cy.get('#times').click();
      cy.get('#minus').click();
      cy.get('#two').click();
      cy.get('#three').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '-1197242');
  });

  it('should be able to multiply two large positve numbers', () => {
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#times').click();
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '270000000000000000');     
  });

  it('should be able to multiply two large negative numbers', () => {
      cy.get('#minus').click();
      cy.get('#nine').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#times').click();
      cy.get('#minus').click();
      cy.get('#three').click();
      for (let z=0; z<8; z++){
            cy.get('#zero').click();
        }
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '270000000000000000');     
  });

  it('should be able to multiply a previous answer by a number', () => {
      cy.get('#one').click();
      cy.get('#two').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#div').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '1200');
  });

  it('should be able to multiply a previous answer by a number v2', () => {
      cy.get('#one').click();
      cy.get('#div').click();
      cy.get('#four').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#one').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', '2.5');
  });

  //Memory Tests
  it('should be able to add to a value and subtract from a value in MRC', () => {
      cy.get('#seven').click();
      cy.get('#seven').click();
      cy.get('#add').click();
      cy.get('#three').click();
      cy.get('#eq').click();
      cy.get('#Mplus').click();
      cy.get('#clear').click();
      cy.get("#three").click();
      cy.get("#nine").click();
      cy.get('#Mminus').click();
      cy.get('#MRC').click();
      cy.get('#display').should('have.value', '41');
  });

  it('should be able to evaluate the square root of a non square number and add that to memory', () => {
      cy.get('#two').click();
      cy.get('#seven').click();
      cy.get('#sq').click();
      cy.get('#Mplus').click();
      cy.get('#MRC').click();
      cy.get('#display').should('have.value', '5.1961524227');
  });

  it('should be able to evaluate the square root of a square number and add that to memory', () => {
      cy.get('#two').click();
      cy.get('#five').click();
      cy.get('#sq').click();
      cy.get('#Mplus').click();
      cy.get('#MRC').click();
      cy.get('#display').should('have.value', '5');
  });

  it('should be able to evaluate the square root of the sware root of a number', () => {
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#sq').click();
      cy.get('#sq').click();
      cy.get('#display').should('have.value', '3.1622776601683795');
  });

  it('should be able to subtract from a zero value in MRC', ()=> {
    for (let z=0; z<10; z++){
            cy.get("#eight").click();
        }
    cy.get('#Mminus').click();
    cy.get('#clear').click();
    cy.get('#zero').click();
    for (let z=0; z<8; z++){
            cy.get("#two").click();
        }
    cy.get('#Mminus').click();
    cy.get('#MRC').click();
    cy.get('#display').should('have.value', '-8911111110');
  });

  //All double signs & strange input 
  it('should not be able to evaluate a double multiplication sign', () =>{
    cy.get('#six').click();
    cy.get('#times').click();
    cy.get('#times').click();
    cy.get('#six').click();
    cy.get('#eq').click();
    cy.get('#display').should('have.value', 'Err');
  });

  it('should not be able to evaluate a double division sign', () =>{
    cy.get('#four').click();
    cy.get('#div').click();
    cy.get('#div').click();
    cy.get('#five').click();
    cy.get('#eq').click();
    cy.get('#display').should('have.value', 'Err');
  });

  it('should not be able to evaluate a division and multiplication signs one after the other', () =>{
      cy.get('#nine').click();
      cy.get('#div').click();
      cy.get('#times').click();
      cy.get('#three').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'Err');
  })

 
  //Random Compound Tests
  it('should calculate the difference between the quotient of 68/2 and 7345 and then make it positive', () => {
      cy.get('#six').click();
      cy.get('#eight').click();
      cy.get('#div').click();
      cy.get('#two').click();
      cy.get('#eq').click();
      cy.get('#minus').click();
      cy.get('#seven').click();
      cy.get('#three').click();
      cy.get('#four').click();
      cy.get('#five').click();
      cy.get('#eq').click();
      cy.get('#pm').click();
      cy.get('#display').should('have.value', '7311');
  });

  it('should calculate the product of Infinity*8 / 9 * 400', () => {
      cy.get('#five').click();
      cy.get('#div').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#eight').click();
      cy.get('#div').click();
      cy.get('#nine').click();
      cy.get('#eq').click();
      cy.get('#times').click();
      cy.get('#four').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#display').should('have.value', 'Infinity');
  });

  it('should be able to evaluate the percentage of the quotient of 98/140', () => {
      cy.get('#nine').click();
      cy.get('#eight').click();
      cy.get('#div').click();
      cy.get('#one').click();
      cy.get('#four').click();
      cy.get('#zero').click();
      cy.get('#eq').click();
      cy.get('#percent').click();
      cy.get('#display').should('have.value', '0.007');
  });

  it('should be able to evaluate the percentage of the sqrt of 100', () => {
      cy.get('#one').click();
      cy.get('#zero').click();
      cy.get('#zero').click();
      cy.get('#sq').click();
      cy.get('#percent').click();
      cy.get('#display').should('have.value', '0.1');
  });

  it('should be able to evaluate the sqrt of 0', () => {
      cy.get('#zero').click();
      cy.get('#sq').click();
      cy.get('#display').should('have.value', '0');
  });

});