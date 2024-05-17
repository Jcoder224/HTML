let c = 0
let cvalue = document.getElementById('count')
let result = document.getElementById('result')
console.log(cvalue.textContent)

function incr() {
  c++
  cvalue.textContent = c;
  
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
    cvalue.textContent = 0

  }
  else if (c >= 20) {
    cvalue.textContent = 0
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
