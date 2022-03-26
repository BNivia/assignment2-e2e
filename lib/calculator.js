let mem = 0;

function startUpCalculator(){
  const buttons = document.querySelectorAll('button');
	buttons.forEach(function(button) {
	  button.addEventListener("click", calculate);
	});
}

// calculate function
function calculate(event) {
  const display = document.querySelector('.display');
  const M = document.querySelector('#MRC');
  const clickedButtonValue = event.target.value;
  
  // works no unit test dblclick fireoff not working???
  M.addEventListener('dblclick', function () {
    mem = 0
  });

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      // display.value = eval(display.value); was not initially in try catch
      try {display.value = eval(display.value);}
      catch {display.value = 'Err';}
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else if (clickedButtonValue === '+/-'){
    // changing display between positive and negative
    display.value = -(display.value);
  } else if (clickedButtonValue === '%'){
    // finding the % of the display
    display.value = display.value/100;
  } else if (clickedButtonValue === 'sqrt'){
    // finding the square root of the display value
    try{display.value = Math.sqrt(display.value);}
    catch{display.value = 'Err';}
  } else if(clickedButtonValue === 'M+'){
    try{mem = mem + parseInt(display.value);}
    catch{display.value = 'Err';}
  }else if(clickedButtonValue === 'M-'){
    try{mem = mem - parseInt(display.value);}
    catch{display.value = 'Err';}
  } else if(clickedButtonValue === 'MRC'){
    display.value = mem
  }else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

startUpCalculator();