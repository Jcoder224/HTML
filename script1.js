<<<<<<< HEAD
let c = 0;
let count = document.getElementById('count')
let result = document.getElementById('result')
console.log(count.textContent)

function incr() {
  c++
  count.textContent = c;
  if (c >= 20) {
    c = 0
  }
  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }
}

function decr() {
  c--
  count.textContent = c;
  if (c <= 0) {
    c = 0
  }
  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }

}

function reset() {
  c = 0
  count.textContent = c
}






























/* let c = 0
let cvalue = document.getElementById('count')
let result = document.getElementById('result')
console.log(cvalue.textContent)

function incr() {
  c++
  cvalue.textContent = c;

  if (c > 20) {
    cvalue.textContent = c ; 
    cvalue.textContent = document.getElementById('btn1').style.
  }
 
  else if (c >= 20) {
    cvalue.textContent = stop(incr)
  }
  
function increment() {
    c++;
    cElement.textContent = c;
    if (c >= 20) {
        incrementButton.disabled = true;
    }
    decrementButton.disabled = false;
}

function decrement() {
    c--;
    countElement.textContent = c;
    if (c <= 0) {
        decrementButton.disabled = true;
    }
    incrementButton.disabled = false;
}

  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }
}

function decr() {
  c--
  cvalue.textContent = c
  if (c <= 0) {
    cvalue.textContent = stop(decr)

  }
  else if (c >= 20) {
    cvalue.textContent = stop(incr)
  }

  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }

}

function reset() {
  c = 0
  cvalue.textContent = 0
}
*/
=======
let c = 0
let cvalue = document.getElementById('count')
let result = document.getElementById('result')
console.log(cvalue.textContent)

function incr() {
  c++
  cvalue.textContent = c;

  if (c <= 0) {
    cvalue.textContent = stop(decr)
  }
 
  else if (c >= 20) {
    cvalue.textContent = stop(incr)
  }
  

  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }
}

function decr() {
  c--
  cvalue.textContent = c
  if (c <= 0) {
    cvalue.textContent = stop(decr)

  }
  else if (c >= 20) {
    cvalue.textContent = stop(incr)
  }

  if (c % 2 === 0) {
    result.textContent = "The count is EVEN.";
  } else {
    result.textContent = "The count is ODD.";
  }

}

function reset() {
  c = 0
  cvalue.textContent = 0
}
>>>>>>> ed26745b038621b9ba3b32e27dc13106d9395a58
